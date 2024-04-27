import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np
import cv2 # pip install opencv-python
import os

# Define the CNN model architecture
def create_model(input_shape):
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Flatten(),
        layers.Dense(128, activation='relu'),
        layers.Dense(1, activation='sigmoid')  # Binary classification (normal/anomaly)
    ])
    return model

# Load and preprocess MRI dataset
def load_mri_dataset(dataset_path):
    """
    Load MRI dataset from the specified directory.

    Args:
    - dataset_path (str): Path to the directory containing MRI scans.

    Returns:
    - X (list): List of preprocessed MRI images.
    """
    X = []
    for filename in os.listdir(dataset_path):
        if filename.endswith('.jpg') or filename.endswith('.png'):
            image_path = os.path.join(dataset_path, filename)
            image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
            if image is not None:
                # Preprocess image
                image = cv2.resize(image, (224, 224))  # Resize image to desired dimensions
                image = image / 255.0  # Normalize pixel values to range [0, 1]
                X.append(image)
    return X

# Example usage:
# dataset_path = '/path/to/mri_dataset'
# X = load_mri_dataset(dataset_path)
# print(f'Loaded {len(X)} MRI scans')

# Create and compile the model
input_shape = (height, width, channels)  # Define the input shape based on the preprocessed images
model = create_model(input_shape)
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_val, y_val))

# Evaluate the model
loss, accuracy = model.evaluate(X_test, y_test)
print(f'Test Loss: {loss}, Test Accuracy: {accuracy}')

# Make predictions on new MRI scans
predictions = model.predict(X_new_scans)


