pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
              sh 'npm install'
            }
        }

        stage('Build')
        {
            steps {
                    sh 'npm run build'
                    //archiveArtifacts artifacts: 'public/**/*, src/**/*'
            }
        }
        stage('Test')
        {
            steps {
                 sh 'npm run test'
            }
        }
        stage('Code coverage')
        {
            steps {
                    sh 'npm run coverage'
            }
        }
        stage('Code Analysis')
        {
            steps {
                    sh 'npm run lint'
            }
        }
        stage('Deliver Artifacts') {
            steps {
                archiveArtifacts 'build/**'
            }
        }
        stage('Deploy to Dev Env') {
           steps {
               echo "Deliver started to Dev Env"
               input message: 'Finished using the web site? (Click "Proceed" to continue)' 
           }
        }
        
        stage('Deploy to QAT Env') {
            steps {
               echo "Deliver started to QAT Env"
           }
        }
        
        stage('Deploy to Staging Env') {
            steps {
               echo "Deploy to Staging Env"
           }
        }
        
        stage('Deploy to Production Env') {
            steps {
               echo "Deploy to Production Env"
               input message: 'Finished production stage of web site? (Click "Proceed" to continue)' 
           }
        }
    }
}
