import './App.css'

import heartHome from './assets/heart-disease/heart-home.png'
import heartForm from './assets/heart-disease/heart-form.png'
import heartResult from './assets/heart-disease/heart-result.png'
import heartArchitecture from './assets/heart-disease/heart-architecture.png'

function HeartDisease({ onBack }) {
  return (
    <div className="project-detail-page">

      <button className="back-button" onClick={onBack}>
        ← Back to Portfolio
      </button>

      <header className="project-detail-hero">
        <p className="section-label">MACHINE LEARNING / WEB APPLICATION</p>

        <h1>
          Heart Disease Prediction
          <span> Using Machine Learning</span>
        </h1>

        <p className="project-detail-intro">
          An end-to-end machine learning web application that predicts
          the likelihood of heart disease from patient clinical information.
        </p>

        <div className="project-detail-tech">
          <span>Python</span>
          <span>Flask</span>
          <span>Scikit-learn</span>
          <span>Logistic Regression</span>
          <span>NumPy</span>
          <span>Pandas</span>
          <span>Joblib</span>
        </div>

        <div className="project-detail-buttons">
          <a
            href="https://github.com/renuka277/Heart-Disease-Prediction-System"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            GitHub ↗
          </a>

          <a
            href="https://heart-disease-prediction-system-u2ie.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button live-button"
          >
            Live Demo ↗
          </a>
        </div>
      </header>

      <section className="project-detail-section">
        <p className="section-label">PROJECT OVERVIEW</p>
        <h2>About the Project</h2>

        <p>
          The project combines a Logistic Regression machine learning model
          with a Flask web application to provide real-time predictions
          through a simple and responsive interface.
        </p>

        <p>
          The model was trained using the UCI Heart Disease Dataset, with
          preprocessing and feature scaling applied before prediction.
          The trained model and scaler were saved using Joblib and integrated
          into the Flask application.
        </p>

        <p>
          The application is deployed on Render and can be accessed through
          a public web URL.
        </p>
      </section>

      <section className="project-detail-section">
        <p className="section-label">PROBLEM STATEMENT</p>
        <h2>Why this project?</h2>

        <p>
          Heart disease is one of the major health concerns worldwide.
          Early identification of potential risk can help support timely
          medical evaluation.
        </p>

        <p>
          This project explores how machine learning can be used to analyze
          clinical patient information and provide a preliminary prediction
          of heart disease risk.
        </p>

        <div className="project-note">
          <strong>Important:</strong> This application is an educational
          machine-learning project and is not intended to provide medical
          diagnosis or replace professional medical advice.
        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">OBJECTIVES</p>
        <h2>Project Objectives</h2>

        <div className="detail-list">
          <p>✓ Build a machine learning model for heart disease prediction.</p>
          <p>✓ Preprocess and transform clinical input data.</p>
          <p>✓ Compare different machine learning algorithms.</p>
          <p>✓ Select an appropriate model for prediction.</p>
          <p>✓ Develop a web interface using Flask.</p>
          <p>✓ Provide real-time prediction results.</p>
          <p>✓ Display prediction confidence.</p>
          <p>✓ Deploy the application online.</p>
        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">DATASET</p>
        <h2>UCI Heart Disease Dataset</h2>

        <p>
          The project uses the UCI Heart Disease Dataset. The dataset
          contains clinical attributes that can be used to predict the
          presence of heart disease.
        </p>

        <div className="feature-grid">
          <div><strong>Age</strong><span>Patient age</span></div>
          <div><strong>Gender</strong><span>Male / Female</span></div>
          <div><strong>Chest Pain Type</strong><span>Type of chest pain</span></div>
          <div><strong>Maximum Heart Rate</strong><span>Maximum heart rate achieved</span></div>
          <div><strong>Exercise-Induced Angina</strong><span>Whether exercise causes angina</span></div>
          <div><strong>Oldpeak</strong><span>ST depression measurement</span></div>
          <div><strong>Slope</strong><span>Slope of the peak exercise ST segment</span></div>
          <div><strong>Major Vessels</strong><span>Number of major vessels colored by fluoroscopy</span></div>
          <div><strong>Thalassemia</strong><span>Thalassemia category</span></div>
        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">PROJECT ARCHITECTURE</p>
        <h2>How the System Works</h2>

        <div className="detail-image-wrapper">
          <img
            src={heartArchitecture}
            alt="Heart Disease Prediction project architecture"
          />
        </div>

        <p className="image-caption">
          Project Architecture — End-to-end workflow of the heart disease prediction system
        </p>
      </section>

      <section className="project-detail-section">
        <p className="section-label">MACHINE LEARNING</p>
        <h2>Model Evaluation</h2>

        <div className="model-grid">
          <div className="model-card selected-model">
            <h3>Logistic Regression</h3>
            <strong>80.33%</strong>
            <span>Selected Model</span>
          </div>

          <div className="model-card">
            <h3>Random Forest</h3>
            <strong>78.69%</strong>
          </div>

          <div className="model-card">
            <h3>Decision Tree</h3>
            <strong>73.77%</strong>
          </div>
        </div>

        <p>
          Logistic Regression was selected for the final application based
          on the model evaluation performed during the project.
        </p>
      </section>

      <section className="project-detail-section">
        <p className="section-label">DATA PREPROCESSING</p>
        <h2>Prediction Pipeline</h2>

        <div className="workflow">
          <div>Patient Input</div>
          <span>↓</span>
          <div>Categorical Value Mapping</div>
          <span>↓</span>
          <div>Numerical Feature Array</div>
          <span>↓</span>
          <div>Feature Scaling</div>
          <span>↓</span>
          <div>Logistic Regression</div>
          <span>↓</span>
          <div>Prediction + Probability</div>
        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">PREDICTION WORKFLOW</p>
        <h2>How the Application Works</h2>

        <div className="workflow-steps">
          <div>
            <span>01</span>
            <h3>User Input</h3>
            <p>
              The user enters the patient's clinical information through
              the web interface.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Data Processing</h3>
            <p>
              The Flask backend converts categorical values into numerical
              values and prepares the input.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Feature Scaling</h3>
            <p>
              The input is transformed using the saved scaler.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Machine Learning Prediction</h3>
            <p>
              The processed data is passed to the trained Logistic Regression model.
            </p>
          </div>

          <div>
            <span>05</span>
            <h3>Result Generation</h3>
            <p>
              The application returns risk prediction, prediction confidence,
              and recommendation.
            </p>
          </div>

          <div>
            <span>06</span>
            <h3>Result Display</h3>
            <p>
              The result is displayed through a dedicated result page.
            </p>
          </div>
        </div>
      </section>

      <section className="project-detail-section screenshots-section">
        <p className="section-label">APPLICATION SCREENSHOTS</p>
        <h2>The Application</h2>

        <div className="project-screenshot">
          <img src={heartHome} alt="Heart Disease Prediction home page" />
          <p>Home Page — Introduction and project overview</p>
        </div>

        <div className="project-screenshot">
          <img src={heartForm} alt="Heart Disease Prediction form" />
          <p>Prediction Interface — Users enter clinical parameters</p>
        </div>

        <div className="project-screenshot">
          <img src={heartResult} alt="Heart Disease Prediction result" />
          <p>Prediction Result — Risk classification and confidence score</p>
        </div>
      </section>

      <section className="project-detail-section">
        <p className="section-label">TECHNOLOGIES</p>
        <h2>Technologies Used</h2>

        <div className="technology-grid">
          <span>Python</span>
          <span>Flask</span>
          <span>Scikit-learn</span>
          <span>Logistic Regression</span>
          <span>NumPy</span>
          <span>Pandas</span>
          <span>Joblib</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Render</span>
          <span>Gunicorn</span>
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

export default HeartDisease