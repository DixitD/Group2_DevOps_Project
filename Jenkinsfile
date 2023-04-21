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
            }
        }
        stage('Run npm Lint')
        {
            steps {
                 sh 'npm run lint'
            }
        }
        stage('Run npm test')
        {
            steps {
                 sh 'npm run test'
            }
        }
        stage('Run npm coverage')
        {
            steps {
                 sh 'npm run coverage'
            }
        }
        post {
            always {
                junit 'reports/**/*.xml'
                cobertura 'coverage/cobertura-coverage.xml'
                // Code analysis can be done using plugins like Checkstyle or PMD
                // checkstyle 'reports/checkstyle.xml'
                // pmd 'reports/pmd.xml'
           }
        }
    }
}

