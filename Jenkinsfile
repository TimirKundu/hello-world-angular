pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                sh 'echo "Angular Build started"'
                sh 'npm install'
                sh 'echo "Angular Build completed"'
            }
        }
        stage('PostBuild') {
            steps {
                sh 'echo "PostBuild started"'
                sh 'npm config ls'
            }
        }
        stage('Deployment') {
            steps {
                sh 'echo "Project delpoyed"'
                sh 'npm start'
            }
        }
    }
}
