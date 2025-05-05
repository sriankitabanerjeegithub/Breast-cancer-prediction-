# from fastapi import FastAPI
# import pickle
# import numpy as np
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware

# # Load the trained model
# model_path = "model.pkl"
# with open(model_path, "rb") as file:
#     model = pickle.load(file)
# print("✅ Model loaded successfully!")
# # Define request model
# class InputData(BaseModel):
#     features: list[float]  # Expecting a list of numerical features

# # Initialize FastAPI app
# app = FastAPI()
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Allows all origins (change this in production)
#     allow_credentials=True,
#     allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
#     allow_headers=["*"],  # Allows all headers
# )


# @app.get("/")
# def home():
#     return {"message": "Breast Cancer Prediction API is running!"}

# @app.post("/predict")
# def predict(data: InputData):
#     if len(data.features) != model.n_features_in_:
#         return {"error": f"Expected {model.n_features_in_} features, but got {len(data.features)}"}
    
#     input_array = np.array(data.features, dtype=np.float64).reshape(1, -1)
#     prediction = model.predict(input_array)
    
#     return {"prediction": int(prediction[0])}





# from fastapi import FastAPI
# import pickle
# import numpy as np
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# import os

# # Load the trained model dynamically from the current script directory
# model_path = os.path.join(os.path.dirname(__file__), "model.pkl")
# with open(model_path, "rb") as file:
#     model = pickle.load(file)
# print("✅ Model loaded successfully!")

# # Define request model
# class InputData(BaseModel):
#     features: list[float]  # Expecting a list of numerical features

# # Initialize FastAPI app
# app = FastAPI()
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Allows all origins (change this in production)
#     allow_credentials=True,
#     allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
#     allow_headers=["*"],  # Allows all headers
# )
# print("Model expects:", model.n_features_in_, "features")

# @app.get("/")
# def home():
#     return {"message": "Breast Cancer Prediction API is running!"}


# @app.post("/predict")
# def predict(data: InputData):
#     if len(data.features) != model.n_features_in_:
#         return {"error": f"Expected {model.n_features_in_} features, but got {len(data.features)}"}
    
#     input_array = np.array(data.features, dtype=np.float64).reshape(1, -1)
#     prediction = model.predict(input_array)
    
#     return {"prediction": int(prediction[0])}
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np
from pydantic import BaseModel
import os

# ✅ Initialize FastAPI
app = FastAPI()

# ✅ Add CORS Middleware (before defining routes)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Change this to your frontend URL for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Load model (ensure file exists)
model_path = r"model.pkl"

if not os.path.exists(model_path):
    print(f"❌ Model file not found at {model_path}")
    model = None
else:
    try:
        with open(model_path, "rb") as file:
            model = pickle.load(file)
        print("✅ Model loaded successfully!")
    except Exception as e:
        print(f"❌ Error loading model: {e}")
        model = None

# ✅ Define input data model
class InputData(BaseModel):
    features: list[float]  # Expecting a list of numerical features

@app.get("/")
def home():
    return {"message": "Breast Cancer Prediction API is running!"}

@app.post("/predict")
def predict(data: InputData):
    if model is None:
        return {"error": "Model is not loaded. Check logs for errors."}

    # ✅ Validate feature count
    if len(data.features) != model.n_features_in_:
        return {"error": f"Expected {model.n_features_in_} features, but got {len(data.features)}"}

    # ✅ Convert input to numpy array
    input_array = np.array(data.features, dtype=np.float64).reshape(1, -1)

    # ✅ Make prediction
    prediction = model.predict(input_array)

    return {"prediction": int(prediction[0])}
