pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('PreBuild') {
          steps {
            sh 'echo "------Removing npm----"'
            sh 'npm uninstall'
            sh 'echo "------npm uninstall finished----"'
          }
        }
        stage('Build') {
            steps {
                sh 'echo "Angular Build started"'
                sh 'cd ${WORKSPACE}'
                sh 'npm install'
                sh 'npm run ng build --dev'
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
                sh 'echo "Project deployed"'
                //sh 'npm start'
            }
        }
    }
}
