# Environment Variables Detection Test - Expected Results

This document lists all environment variables that should be detected by the agent.

## Total Expected Variables: 120+

### Database Configuration (9 variables)
- DATABASE_URL (secret) - Found in: .env.example, backend/index.js, backend/config/database.js, backend/config.py, docker-compose.yml, k8s/deployment.yaml
- DATABASE_PASSWORD (secret) - Found in: .env.example, backend/config/database.js, docker-compose.yml, k8s/deployment.yaml
- DATABASE_USER (variable) - Found in: .env.example, backend/config/database.js, docker-compose.yml
- DATABASE_NAME (variable) - Found in: .env.example, backend/config/database.js, docker-compose.yml, k8s/deployment.yaml
- DATABASE_HOST (variable) - Found in: backend/config/database.js, k8s/deployment.yaml
- DATABASE_PORT (variable) - Found in: backend/config/database.js, docker-compose.yml
- DATABASE_SSL (variable) - Found in: backend/index.js
- DATABASE_SSL_CERT (secret) - Found in: backend/config/database.js
- DB_POOL_SIZE (variable) - Found in: backend/index.js, backend/config.py, docker-compose.yml

### Redis Configuration (8 variables)
- REDIS_HOST (variable) - Found in: .env.example, backend/config/redis.js, docker-compose.yml, go-service/main.go, k8s/deployment.yaml
- REDIS_PORT (variable) - Found in: .env.example, backend/config/redis.js, go-service/main.go
- REDIS_PASSWORD (secret) - Found in: .env.example, backend/config/redis.js, backend/config.py, docker-compose.yml, go-service/main.go, k8s/deployment.yaml
- REDIS_DB (variable) - Found in: backend/config/redis.js, backend/config.py, go-service/main.go
- REDIS_URL (variable) - Found in: backend/config.py
- REDIS_TTL (variable) - Found in: backend/config.py
- REDIS_MAX_MEMORY (variable) - Found in: docker-compose.yml
- REDIS_EVICTION_POLICY (variable) - Found in: docker-compose.yml

### Stripe Payment (4 variables)
- STRIPE_API_KEY (secret) - Found in: .env.example, backend/services/payment.js, docker-compose.yml, go-service/main.go, k8s/deployment.yaml
- STRIPE_WEBHOOK_SECRET (secret) - Found in: .env.example, backend/services/payment.js, docker-compose.yml, k8s/deployment.yaml
- STRIPE_PUBLISHABLE_KEY (secret) - Found in: frontend/src/App.js, frontend/.env.example
- DEFAULT_CURRENCY (variable) - Found in: backend/services/payment.js

### AWS Configuration (8 variables)
- AWS_ACCESS_KEY_ID (secret) - Found in: .env.example, backend/services/storage.js, docker-compose.yml, k8s/deployment.yaml
- AWS_SECRET_ACCESS_KEY (secret) - Found in: .env.example, backend/services/storage.js, docker-compose.yml, k8s/deployment.yaml
- AWS_REGION (variable) - Found in: .env.example, backend/services/storage.js, docker-compose.yml, k8s/deployment.yaml
- S3_BUCKET_NAME (variable) - Found in: .env.example, backend/services/storage.js, docker-compose.yml, k8s/deployment.yaml
- S3_ACL (variable) - Found in: backend/services/storage.js
- S3_ENCRYPTION (variable) - Found in: backend/services/storage.js
- CDN_URL (variable) - Found in: backend/services/storage.js

### Application Settings (15 variables)
- NODE_ENV (variable) - Found in: .env.example, backend/index.js, backend/services/payment.js, backend/config/database.js, docker-compose.yml, k8s/deployment.yaml, scripts/deploy.sh
- PORT (variable) - Found in: .env.example, backend/index.js, backend/config.py, docker-compose.yml, k8s/deployment.yaml
- APP_URL (variable) - Found in: .env.example, backend/index.js
- APP_VERSION (variable) - Found in: backend/index.js, backend/config.py, frontend/src/App.js, frontend/.env.example, go-service/main.go
- APP_NAME (variable) - Found in: backend/config.py
- HOST (variable) - Found in: backend/config.py, go-service/main.go
- DEBUG (variable) - Found in: backend/config.py
- WORKERS (variable) - Found in: backend/config.py
- SECRET_KEY (secret) - Found in: backend/config.py, docker-compose.yml, k8s/deployment.yaml
- JWT_SECRET (secret) - Found in: .env.example, backend/index.js, backend/config/redis.js, backend/config.py, docker-compose.yml, k8s/deployment.yaml
- JWT_EXPIRY (variable) - Found in: backend/index.js
- JWT_ALGORITHM (variable) - Found in: backend/config.py
- JWT_EXPIRATION_HOURS (variable) - Found in: backend/config.py
- SESSION_SECRET (secret) - Found in: .env.example, backend/config/redis.js, docker-compose.yml, k8s/deployment.yaml
- SESSION_MAX_AGE (variable) - Found in: backend/config/redis.js, k8s/deployment.yaml

### External API Keys (14 variables)
- SENDGRID_API_KEY (secret) - Found in: .env.example, backend/api_client.py, docker-compose.yml, k8s/deployment.yaml
- SENDGRID_FROM_EMAIL (variable) - Found in: backend/api_client.py
- SENDGRID_TEMPLATE_ID (variable) - Found in: backend/api_client.py
- OPENAI_API_KEY (secret) - Found in: .env.example, backend/api_client.py, docker-compose.yml, k8s/deployment.yaml
- OPENAI_ORG_ID (variable) - Found in: backend/api_client.py
- OPENAI_BASE_URL (variable) - Found in: backend/api_client.py
- OPENAI_MODEL (variable) - Found in: backend/api_client.py
- OPENAI_TEMPERATURE (variable) - Found in: backend/api_client.py
- OPENAI_MAX_TOKENS (variable) - Found in: backend/api_client.py
- WEATHER_API_KEY (secret) - Found in: .env.example, backend/api_client.py, docker-compose.yml, k8s/deployment.yaml
- WEATHER_API_URL (variable) - Found in: backend/api_client.py
- WEATHER_INCLUDE_AQI (variable) - Found in: backend/api_client.py
- GITHUB_TOKEN (secret) - Found in: .env.example, backend/api_client.py, docker-compose.yml, k8s/deployment.yaml
- GITHUB_API_URL (variable) - Found in: backend/api_client.py

### OAuth Configuration (6 variables)
- GOOGLE_CLIENT_ID (variable) - Found in: backend/config.py
- GOOGLE_CLIENT_SECRET (secret) - Found in: backend/config.py, k8s/deployment.yaml
- GOOGLE_REDIRECT_URI (variable) - Found in: backend/config.py
- GOOGLE_MAPS_API_KEY (secret) - Found in: frontend/src/App.js, frontend/.env.example
- GITHUB_CLIENT_ID (variable) - Found in: backend/config.py
- GITHUB_CLIENT_SECRET (secret) - Found in: backend/config.py, k8s/deployment.yaml

### Email/SMTP (6 variables)
- SMTP_HOST (variable) - Found in: backend/config.py
- SMTP_PORT (variable) - Found in: backend/config.py
- SMTP_USER (variable) - Found in: backend/config.py
- SMTP_PASSWORD (secret) - Found in: backend/config.py, k8s/deployment.yaml
- SMTP_TLS (variable) - Found in: backend/config.py

### Feature Flags (9 variables)
- ENABLE_ANALYTICS (variable) - Found in: .env.example, backend/config.py, docker-compose.yml, frontend/src/App.js, frontend/.env.example, k8s/deployment.yaml
- ENABLE_BETA_FEATURES (variable) - Found in: .env.example, backend/config.py, frontend/src/App.js, frontend/.env.example
- ENABLE_RATE_LIMITING (variable) - Found in: backend/api_client.py, backend/config.py
- ENABLE_API_CACHING (variable) - Found in: backend/api_client.py
- ENABLE_DARK_MODE (variable) - Found in: frontend/src/App.js, frontend/.env.example
- ENABLE_METRICS (variable) - Found in: go-service/main.go, docker-compose.yml, k8s/deployment.yaml
- ENABLE_TRACING (variable) - Found in: go-service/main.go

### Monitoring & Logging (11 variables)
- SENTRY_DSN (secret) - Found in: backend/config.py, docker-compose.yml, frontend/src/App.js, frontend/.env.example, k8s/deployment.yaml
- SENTRY_ENVIRONMENT (variable) - Found in: backend/config.py, k8s/deployment.yaml
- SENTRY_TRACES_SAMPLE_RATE (variable) - Found in: backend/config.py
- LOG_LEVEL (variable) - Found in: backend/api_client.py, backend/config.py, docker-compose.yml, k8s/deployment.yaml
- LOG_FORMAT (variable) - Found in: backend/config.py
- LOG_FILE (variable) - Found in: backend/config.py
- DATADOG_API_KEY (secret) - Found in: go-service/main.go, docker-compose.yml, k8s/deployment.yaml
- DATADOG_APP_KEY (secret) - Found in: go-service/main.go, docker-compose.yml, k8s/deployment.yaml
- GA_TRACKING_ID (secret) - Found in: frontend/src/App.js, frontend/.env.example

### Upload & Storage (5 variables)
- MAX_UPLOAD_SIZE (variable) - Found in: .env.example, backend/services/storage.js, backend/config.py, frontend/src/App.js, frontend/.env.example, k8s/deployment.yaml
- UPLOAD_DIR (variable) - Found in: backend/config.py
- ALLOWED_EXTENSIONS (variable) - Found in: backend/config.py
- MAX_REQUEST_SIZE (variable) - Found in: backend/index.js
- ALLOWED_ORIGINS (variable) - Found in: backend/index.js

### Celery/Background Tasks (2 variables)
- CELERY_BROKER_URL (variable) - Found in: backend/config.py, docker-compose.yml
- CELERY_RESULT_BACKEND (variable) - Found in: backend/config.py, docker-compose.yml

### Rate Limiting (2 variables)
- RATE_LIMIT_PER_MINUTE (variable) - Found in: backend/config.py
- RATE_LIMIT_PER_HOUR (variable) - Found in: backend/config.py

### Go Service Specific (8 variables)
- GO_SERVICE_PORT (variable) - Found in: docker-compose.yml, go-service/main.go
- GO_SERVICE_HOST (variable) - Found in: go-service/main.go
- GO_ENV (variable) - Found in: docker-compose.yml, go-service/main.go
- DATABASE_DRIVER (variable) - Found in: go-service/main.go
- MAX_DB_CONNECTIONS (variable) - Found in: go-service/main.go
- READ_TIMEOUT_SECONDS (variable) - Found in: go-service/main.go
- WRITE_TIMEOUT_SECONDS (variable) - Found in: go-service/main.go
- TWILIO_ACCOUNT_SID (variable) - Found in: go-service/main.go, docker-compose.yml
- TWILIO_AUTH_TOKEN (secret) - Found in: go-service/main.go, docker-compose.yml, k8s/deployment.yaml

### React Frontend Specific (5 variables)
- REACT_APP_API_URL (variable) - Found in: frontend/src/App.js, frontend/.env.example
- REACT_APP_API_TIMEOUT (variable) - Found in: frontend/src/App.js, frontend/.env.example
- REACT_APP_ENVIRONMENT (variable) - Found in: frontend/src/App.js, frontend/.env.example
- REACT_APP_BUILD_NUMBER (variable) - Found in: frontend/src/App.js, frontend/.env.example
- REACT_APP_DEV_AUTH_TOKEN (secret) - Found in: frontend/src/App.js, frontend/.env.example

### Deployment Script Variables (15 variables)
- DEPLOY_ENVIRONMENT (variable) - Found in: scripts/deploy.sh
- DEPLOY_USER (variable) - Found in: scripts/deploy.sh
- DEPLOY_HOST (variable) - Found in: scripts/deploy.sh
- DEPLOY_PATH (variable) - Found in: scripts/deploy.sh
- SSH_KEY_PATH (secret) - Found in: scripts/deploy.sh
- DOCKER_REGISTRY (variable) - Found in: scripts/deploy.sh
- DOCKER_USERNAME (variable) - Found in: scripts/deploy.sh
- DOCKER_PASSWORD (secret) - Found in: scripts/deploy.sh
- DOCKER_IMAGE_NAME (variable) - Found in: scripts/deploy.sh
- DOCKER_IMAGE_TAG (variable) - Found in: scripts/deploy.sh
- BUILD_NUMBER (variable) - Found in: scripts/deploy.sh
- DB_MIGRATION_TIMEOUT (variable) - Found in: scripts/deploy.sh
- RUN_MIGRATIONS (variable) - Found in: scripts/deploy.sh
- HEALTH_CHECK_URL (variable) - Found in: scripts/deploy.sh
- HEALTH_CHECK_RETRIES (variable) - Found in: scripts/deploy.sh
- HEALTH_CHECK_INTERVAL (variable) - Found in: scripts/deploy.sh
- SLACK_WEBHOOK_URL (secret) - Found in: scripts/deploy.sh
- NOTIFY_ON_SUCCESS (variable) - Found in: scripts/deploy.sh
- NOTIFY_ON_FAILURE (variable) - Found in: scripts/deploy.sh

### Test Database (3 variables)
- TEST_DATABASE_HOST (variable) - Found in: backend/config/database.js
- TEST_DATABASE_PORT (variable) - Found in: backend/config/database.js
- TEST_DATABASE_NAME (variable) - Found in: backend/config/database.js
- TEST_DATABASE_USER (variable) - Found in: backend/config/database.js
- TEST_DATABASE_PASSWORD (secret) - Found in: backend/config/database.js

### Miscellaneous (10 variables)
- DB_IDLE_TIMEOUT (variable) - Found in: backend/config/database.js
- COOKIE_SECURE (variable) - Found in: backend/config/redis.js
- REFUND_REASON (variable) - Found in: backend/services/payment.js
- API_REQUEST_TIMEOUT (variable) - Found in: backend/api_client.py
- API_MAX_RETRIES (variable) - Found in: backend/api_client.py
- REFRESH_TOKEN_EXPIRE_DAYS (variable) - Found in: backend/config.py
- DB_ECHO (variable) - Found in: backend/config.py
- DB_MAX_OVERFLOW (variable) - Found in: backend/config.py
- TLS_CERT_FILE (secret) - Found in: go-service/main.go, docker-compose.yml
- TLS_KEY_FILE (secret) - Found in: go-service/main.go, docker-compose.yml
- NGINX_HTTP_PORT (variable) - Found in: docker-compose.yml
- NGINX_HTTPS_PORT (variable) - Found in: docker-compose.yml
- NGINX_HOST (variable) - Found in: docker-compose.yml
- SSL_CERT_PATH (secret) - Found in: docker-compose.yml
- POSTGRES_INITDB_ARGS (variable) - Found in: docker-compose.yml

## Classification Guidelines

### Variables (Plain Text)
- Ports, hosts, URLs (non-authenticated)
- Feature flags (boolean settings)
- Timeouts, limits, sizes
- Environment names (dev, prod)
- Configuration options
- Log levels

### Secrets (Sensitive)
- API keys, tokens
- Passwords, auth tokens
- Private keys, certificates
- Database credentials
- OAuth client secrets
- Webhook secrets
- DSNs containing credentials
