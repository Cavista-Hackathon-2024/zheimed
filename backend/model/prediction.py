import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
from torchvision import transforms, datasets
import torchsummary
from torch.utils.data import random_split

from sklearn.metrics import classification_report, confusion_matrix, roc_curve, roc_auc_score

import pandas as pd
import numpy as np

import matplotlib.pyplot as plt
import seaborn as sns

training_folder = "backend/model/train"
testing_folder = "backend/model/test"

class CustomCNN(nn.Module):
    def __init__(self, num_classes=2):
        super(CustomCNN, self).__init__()
        self.conv1 = nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, stride=1, padding=1)
        self.relu = nn.ReLU()
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)
        self.conv2 = nn.Conv2d(in_channels=16, out_channels=32, kernel_size=3, stride=1, padding=1)
        self.fc1 = nn.Linear(32 * 56 * 56, 128)
        self.fc2 = nn.Linear(128, num_classes)

    def forward(self, x):
        x = self.relu(self.conv1(x))
        x = self.pool(x)
        x = self.relu(self.conv2(x))
        x = self.pool(x)
        x = x.view(-1, 32 * 56 * 56)
        x = self.relu(self.fc1(x))
        x = self.fc2(x)
        return x

data_transforms = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

train_dataset = datasets.ImageFolder(training_folder, transform=data_transforms)

train_size = int(0.8 * len(train_dataset))
val_size = len(train_dataset) - train_size
train_dataset, val_dataset = random_split(train_dataset, [train_size, val_size])

train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=32, shuffle=False)

test_dataset = datasets.ImageFolder(testing_folder, transform=data_transforms)
test_loader = DataLoader(test_dataset, batch_size=32, shuffle=False)

classes = train_dataset.dataset.classes

print('Class labels: ', classes)

import matplotlib.pyplot as plt
import numpy as np
import torchvision.utils as vutils

classes = train_dataset.classes
num_classes = len(classes)

# Get the class indices
class_indices = list(range(num_classes))

# Initialize an empty list to store sample images and their corresponding class labels
sample_images = []
class_labels = []

# Iterate over the DataLoader to get images and labels
for images, labels in train_loader:
    for cls, idx in enumerate(class_indices):
        if idx in labels:
            # Append the first image from each class
            sample_images.append(images[labels == idx][0])  # Append the first image
            class_labels.append(classes[idx])  # Append the class label
    if len(sample_images) == num_classes:
        break  # Break the loop once we have one image per class

# Convert the sample images to a grid
grid_img = vutils.make_grid(sample_images, nrow=num_classes)

# Plot the grid of images
plt.figure(figsize=(20, 15))
plt.imshow(np.transpose(grid_img, (1, 2, 0)))
plt.axis('off')

# Calculate the height for sub-labels row
height = grid_img.shape[1] // num_classes

# Add titles to each image
for i, label in enumerate(class_labels):
    x = (i % num_classes) * height + 5  # Calculate x position for each sub-label
    y = (i // num_classes) * height + height + 10  # Calculate y position for each sub-label
    plt.text(x, y, label, ha='left', va='top', fontsize=12, color='white')

plt.title('Brain Tumor Images')
plt.show()

model = CustomCNN(num_classes=len(test_dataset.classes))

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model.to(device)

torchsummary.summary(model, input_size=(3, 224, 224))

criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)



n_epochs = 10

train_loss_epochs = []
train_acc_epochs = []
val_loss_epochs = []
val_acc_epochs = []
best_val_acc = 0

for epoch in range(n_epochs):
    # Training
    model.train()
    train_loss = 0.0
    train_correct = 0
    train_total = 0

    for images, labels in train_loader:
        images, labels = images.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        train_loss += loss.item()
        _, predicted = torch.max(outputs, 1)
        train_total += labels.size(0)
        train_correct += (predicted == labels).sum().item()

    train_loss_epochs.append(train_loss / len(train_loader))
    train_acc_epochs.append(train_correct / train_total)

    model.eval()
    val_loss = 0.0
    val_correct = 0
    val_total = 0

    with torch.no_grad():
        for images, labels in val_loader:
            images, labels = images.to(device), labels.to(device)
            outputs = model(images)
            loss = criterion(outputs, labels)

            val_loss += loss.item()
            _, predicted = torch.max(outputs, 1)
            val_total += labels.size(0)
            val_correct += (predicted == labels).sum().item()

    val_loss_epochs.append(val_loss / len(val_loader))
    val_acc_epochs.append(val_correct / val_total)

    if val_acc_epochs[-1] > best_val_acc:
        best_val_acc = val_acc_epochs[-1]
        torch.save(model.state_dict(), 'best_model.pth')

    print(f"Epoch [{epoch+1}/{n_epochs}] - Train Loss: {train_loss_epochs[-1]:.4f}, Train Acc: {train_acc_epochs[-1]:.4f}, "
          f"Val Loss: {val_loss_epochs[-1]:.4f}, Val Acc: {val_acc_epochs[-1]:.4f}")

print('Training completed!')

plt.figure(figsize=(10, 5))
plt.plot(train_acc_epochs, label='Train Accuracy')
plt.plot(val_acc_epochs, label='Validation Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.title('Training and Validation Accuracy')
plt.legend()
plt.grid(True)
plt.show()

