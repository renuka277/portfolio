import './App.css'

import skinHome from './assets/skin-disease/skin-home.png'
import skinPreview from './assets/skin-disease/skin-preview.png'
import skinResult from './assets/skin-disease/skin-result.png'

function SkinDisease({ onBack }) {
  return (
    <div className="project-detail-page">

      <button className="back-button" onClick={onBack}>
        ← Back to Portfolio
      </button>

      <header className="project-detail-hero">
        <p className="section-label">DEEP LEARNING / COMPUTER VISION</p>

        <h1>
          Skin Disease Detection
          <span>AI</span>
        </h1>

        <p className="project-detail-intro">
          A deep learning-based image classification application designed
          to identify different types of skin lesions from uploaded images.
        </p>

        <div className="project-detail-tech">
          <span>Python</span>
          <span>TensorFlow</span>
          <span>Keras</span>
          <span>EfficientNetB0</span>
          <span>Flask</span>
          <span>HAM10000</span>
          <span>Transfer Learning</span>
        </div>

        <div className="project-detail-buttons">
          <a
            href="https://github.com/renuka277/SkinDiseaseDetectionAI"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      <section className="project-detail-section">
        <p className="section-label">PROJECT OVERVIEW</p>
        <h2>About the Project</h2>

        <p>
          Skin Disease Detection AI is a deep learning-based image
          classification application designed to identify different types
          of skin lesions from uploaded images.
        </p>

        <p>
          The project uses transfer learning with EfficientNetB0 and the
          HAM10000 dataset. The trained model processes the uploaded image,
          extracts relevant visual features, and predicts the most likely
          skin lesion category.
        </p>

        <p>
          The prediction result includes the predicted disease, confidence
          score, severity information, description, and precautionary
          recommendations.
        </p>
      </section>

      <section className="project-detail-section">
        <p className="section-label">PROBLEM STATEMENT</p>
        <h2>Why this project?</h2>

        <p>
          Skin lesions can have visually similar characteristics, making
          image-based classification a challenging computer vision problem.
          Manual examination requires specialized medical knowledge and can
          be time-consuming.
        </p>

        <p>
          The objective of this project was to develop an AI-powered image
          classification system that can analyze skin lesion images and
          classify them into predefined categories using deep learning.
        </p>

        <div className="project-note">
          <strong>Important:</strong> This application is intended for
          educational and research purposes and should not be considered
          a medical diagnosis. Always consult a qualified dermatologist
          for professional advice.
        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">DATASET</p>
        <h2>HAM10000 Dataset</h2>

        <p>
          The model was trained using the HAM10000 dataset, a large
          collection of dermatoscopic images covering seven different
          categories of pigmented skin lesions.
        </p>

        <p>
          The dataset contains significant differences in the number of
          samples across classes, making class imbalance an important
          consideration during model development.
        </p>

        <div className="feature-grid skin-class-grid">

          <div>
            <strong>NV</strong>
            <span>Melanocytic nevi</span>
            <b>6705 images</b>
          </div>

          <div>
            <strong>MEL</strong>
            <span>Melanoma</span>
            <b>1113 images</b>
          </div>

          <div>
            <strong>BKL</strong>
            <span>Benign keratosis-like lesions</span>
            <b>1099 images</b>
          </div>

          <div>
            <strong>BCC</strong>
            <span>Basal cell carcinoma</span>
            <b>514 images</b>
          </div>

          <div>
            <strong>AKIEC</strong>
            <span>Actinic keratoses / intraepithelial carcinoma</span>
            <b>327 images</b>
          </div>

          <div>
            <strong>VASC</strong>
            <span>Vascular lesions</span>
            <b>142 images</b>
          </div>

          <div>
            <strong>DF</strong>
            <span>Dermatofibroma</span>
            <b>115 images</b>
          </div>

        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">TECHNOLOGIES</p>
        <h2>Technology Stack</h2>

        <div className="technology-grid">
          <span>Python</span>
          <span>TensorFlow</span>
          <span>Keras</span>
          <span>EfficientNetB0</span>
          <span>Transfer Learning</span>
          <span>OpenCV</span>
          <span>Flask</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>HAM10000</span>
          <span>Jupyter Notebook</span>
          <span>VS Code</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">WORKFLOW</p>
        <h2>Project Workflow</h2>

        <p>
          The application follows a complete pipeline from image upload
          to disease classification.
        </p>

        <div className="workflow">

          <div>User Uploads Image</div>
          <span>↓</span>

          <div>Image Validation</div>
          <span>↓</span>

          <div>Image Preprocessing</div>
          <span>↓</span>

          <div>Resize to 224 × 224</div>
          <span>↓</span>

          <div>Pixel Preprocessing</div>
          <span>↓</span>

          <div>EfficientNetB0</div>
          <span>↓</span>

          <div>Feature Extraction</div>
          <span>↓</span>

          <div>Classification Layer</div>
          <span>↓</span>

          <div>Seven-Class Prediction</div>
          <span>↓</span>

          <div>Confidence Score</div>
          <span>↓</span>

          <div>Disease Information</div>
          <span>↓</span>

          <div>Precautions & Recommendations</div>

        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">IMAGE PREPROCESSING</p>
        <h2>Preparing the Image</h2>

        <p>
          Before prediction, the uploaded image goes through a preprocessing
          pipeline to make it compatible with the trained EfficientNetB0 model.
        </p>

        <p>
          The image is read and decoded, resized to <strong>224 × 224 pixels</strong>,
          converted to floating-point representation, and processed using
          EfficientNet preprocessing before being passed to the model.
        </p>

        <div className="workflow">

          <div>Original Image</div>
          <span>↓</span>

          <div>JPEG Decode</div>
          <span>↓</span>

          <div>224 × 224 Resize</div>
          <span>↓</span>

          <div>Float32 Conversion</div>
          <span>↓</span>

          <div>EfficientNet Preprocessing</div>
          <span>↓</span>

          <div>Model Input</div>

        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">MODEL ARCHITECTURE</p>
        <h2>EfficientNetB0</h2>

        <p>
          EfficientNetB0 was used as the base architecture because it provides
          an efficient convolutional neural network architecture suitable for
          image classification.
        </p>

        <p>
          Transfer learning was used by initializing the EfficientNetB0 base
          with ImageNet pretrained weights. The base model was initially frozen
          while the classification layers were trained for the seven skin
          lesion categories.
        </p>

        <div className="workflow">

          <div>Input Image — 224 × 224 × 3</div>
          <span>↓</span>

          <div>EfficientNetB0</div>
          <span>↓</span>

          <div>Global Average Pooling</div>
          <span>↓</span>

          <div>Dropout — 0.3</div>
          <span>↓</span>

          <div>Dense Layer</div>
          <span>↓</span>

          <div>Softmax</div>
          <span>↓</span>

          <div>7 Skin Lesion Classes</div>

        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">MODEL TRAINING</p>
        <h2>Training Results</h2>

        <p>
          The model was trained using a transfer-learning approach. During
          the initial training stage, the EfficientNetB0 base layers were
          frozen and the newly added classification head was trained for
          the target classes.
        </p>

        <p>
          The training process used validation data to monitor the model's
          performance and a learning-rate reduction strategy to adjust the
          learning rate when validation performance stopped improving.
        </p>

        <div className="model-grid">

          <div className="model-card selected-model">
            <h3>Epochs</h3>
            <strong>5</strong>
          </div>

          <div className="model-card">
            <h3>Best Validation Accuracy</h3>
            <strong>76.90%</strong>
          </div>

          <div className="model-card">
            <h3>Best Validation Loss</h3>
            <strong>0.6656</strong>
          </div>

        </div>

        <div className="training-table">

          <div className="training-row training-header">
            <span>Epoch</span>
            <span>Training Accuracy</span>
            <span>Validation Accuracy</span>
          </div>

          <div className="training-row">
            <span>1</span>
            <span>66.45%</span>
            <span>72.36%</span>
          </div>

          <div className="training-row">
            <span>2</span>
            <span>72.69%</span>
            <span>71.50%</span>
          </div>

          <div className="training-row">
            <span>3</span>
            <span>74.79%</span>
            <span>76.90%</span>
          </div>

          <div className="training-row">
            <span>4</span>
            <span>75.56%</span>
            <span>75.72%</span>
          </div>

          <div className="training-row">
            <span>5</span>
            <span>76.81%</span>
            <span>76.81%</span>
          </div>

        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">MODEL EVALUATION</p>
        <h2>Evaluation</h2>

        <p>
          Model performance was evaluated using validation and classification
          metrics to understand the prediction behavior across the different
          skin lesion categories.
        </p>

        <p>
          A confusion matrix was used to visualize correct predictions and
          misclassifications between individual classes.
        </p>

        <div className="project-note">
          The final evaluation accuracy is not displayed here because an
          exact final evaluation accuracy was not provided.
        </div>
      </section>

      <section className="project-detail-section screenshots-section">
        <p className="section-label">WEB APPLICATION</p>
        <h2>The Application</h2>

        <div className="project-screenshot">
          <img
            src={skinHome}
            alt="Skin Disease Detection AI upload interface"
          />
          <p>
            Image Upload Interface — Users can upload a skin lesion image
            for analysis.
          </p>
        </div>

        <div className="project-screenshot">
          <img
            src={skinPreview}
            alt="Skin Disease Detection AI uploaded image preview"
          />
          <p>
            Uploaded Image Preview — The selected skin lesion image is
            displayed before prediction.
          </p>
        </div>

        <div className="project-screenshot">
          <img
            src={skinResult}
            alt="Skin Disease Detection AI prediction result"
          />
          <p>
            Prediction Result — Displays the predicted lesion category,
            confidence score, severity, description, and precautions.
          </p>
        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">PROJECT HIGHLIGHT</p>
        <h2>Prediction Output</h2>

        <div className="feature-grid">

          <div>
            <strong>Predicted Disease</strong>
            <span>Identifies the predicted skin lesion category.</span>
          </div>

          <div>
            <strong>Confidence Score</strong>
            <span>Displays the model's prediction confidence.</span>
          </div>

          <div>
            <strong>Severity</strong>
            <span>Provides severity information with the prediction.</span>
          </div>

          <div>
            <strong>Description</strong>
            <span>Provides information about the predicted category.</span>
          </div>

          <div>
            <strong>Precautions</strong>
            <span>Displays precautionary recommendations.</span>
          </div>

          <div>
            <strong>Educational Use</strong>
            <span>Designed for educational and research purposes.</span>
          </div>

        </div>
      </section>

      <div className="project-detail-footer">
        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>
      </div>

    </div>
  )
}

export default SkinDisease