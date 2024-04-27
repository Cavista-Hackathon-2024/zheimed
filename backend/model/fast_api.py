from fastapi import FastAPI, File, UploadFile
from typing import List
import numpy as np
import cv2;
import uvicorn

app = FastAPI()

def process_image(image_path: str) -> str:
    # Example processing (convert image to grayscale)
    image = cv2.imread(image_path)
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # Example analysis (return mean pixel value)
    analysis_result = np.mean(gray_image)
    return f"Analysis result: Mean pixel value = {analysis_result}"

@app.post("/analyze_mri_image")
async def analyze_mri_image(file: UploadFile = File(...)):
    try:
        # Save the uploaded MRI image temporarily
        with open("temp_image.jpg", "wb") as image_file:
            image_file.write(await file.read())

        # Process the uploaded MRI image using your machine learning model
        analysis_result = process_image("temp_image.jpg")

        # Return the analysis as the response
        return {"analysis": analysis_result}
    except Exception as e:
        # Handle any errors
        return {"error": str(e)}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)