pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                sh 'echo "Hello World"'
                sh 'npm install'
            }
        }
        stage('Deployment') {
            steps {
                sh 'echo "Deployment started"'
            }
        }
        stage('Test') {
            steps {
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}
