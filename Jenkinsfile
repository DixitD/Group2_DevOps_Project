pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
              sh 'npm install'
            }
        }

        stage('Run npm Build')
        {
            steps {
                    sh 'npm run build'
                    sh 'npm run coverage'
                    archiveArtifacts artifacts: 'public/**/*, src/**/*'
            }
        }
        stage('Run npm test')
        {
            steps {
                 sh 'npm run test'
            }
        }
        stage('Development') {
           steps {
               echo "Deliver started to Dev Env"
               input message: 'Finished using the web site? (Click "Proceed" to continue)' 
           }
        }
        
        stage('QAT') {
            steps {
               echo "Deliver started to QAT Env"
           }
        }
        
        stage('Staging') {
            steps {
               echo "Deploy to Staging Env"
           }
        }
        
        stage('Production') {
            steps {
               echo "Deploy to Production Env"
               input message: 'Finished production stage of web site? (Click "Proceed" to continue)' 
           }
        }
    }
}
