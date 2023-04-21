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
    }
}
