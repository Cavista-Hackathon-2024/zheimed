from fastapi import FastAPI, File, UploadFile
from typing import List
import numpy as np
import cv2;
import uvicorn

app = FastAPI()

def process_image(image_path: str) -> str:
    image = cv2.imread(image_path)
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    analysis_result = np.mean(gray_image)
    return f"Analysis result: Mean pixel value = {analysis_result}"

@app.post("/analyze_mri_image")
async def analyze_mri_image(file: UploadFile = File(...)):
    try:
        with open("temp_image.jpg", "wb") as image_file:
            image_file.write(await file.read())

        analysis_result = process_image("temp_image.jpg")

        return {"analysis": analysis_result}
    except Exception as e:
        return {"error": str(e)}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)