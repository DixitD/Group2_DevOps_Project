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
                    archiveArtifacts artifacts: 'public/**/*, src/**/*'
                    publishArtifacts artifacts: 'public/**/*, src/**/*', destination: '/var/www/html'
            }
        }
        stage('Run npm test')
        {
            steps {
                 sh 'npm run test'
            }
        }
    }
}
