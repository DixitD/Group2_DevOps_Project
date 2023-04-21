pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
              sh 'npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
              script {
                sh "docker build -t ${DOCKERHUB_USERNAME}/webapp:latest ."
            
              }
           }
        }
        stage('Run tests')
        {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
    }
}

