# Testing Your Environment Variable Detection Agent

## Repository Structure
```
test-env-repo/
├── .env.example                      # 30+ variables
├── README.md                         
├── EXPECTED_VARIABLES.md             # Complete list of expected results
├── docker-compose.yml                # 50+ variables across services
├── backend/
│   ├── index.js                      # Node.js entry (15+ variables)
│   ├── package.json
│   ├── requirements.txt
│   ├── api_client.py                 # Python API client (30+ variables)
│   ├── config.py                     # Python config (50+ variables)
│   ├── config/
│   │   ├── database.js               # DB config (15+ variables)
│   │   └── redis.js                  # Redis config (8+ variables)
│   └── services/
│       ├── payment.js                # Stripe integration (5+ variables)
│       └── storage.js                # AWS S3 (10+ variables)
├── frontend/
│   ├── .env.example                  # React env vars (10+ variables)
│   └── src/
│       └── App.js                    # React app (20+ variables)
├── go-service/
│   └── main.go                       # Go microservice (30+ variables)
├── k8s/
│   └── deployment.yaml               # Kubernetes (60+ variables)
└── scripts/
    └── deploy.sh                     # Bash deployment (20+ variables)
```

## Total Environment Variables: 120+

## Languages/Frameworks Covered:
- **Node.js/JavaScript**: Backend API with Express
- **Python**: API clients, configuration, background tasks
- **Go**: Microservice
- **React**: Frontend application (REACT_APP_ prefix)
- **Shell Script**: Deployment automation
- **Docker Compose**: Multi-service orchestration
- **Kubernetes**: Production deployment

## Variable Types:
- **Secrets** (60+): API keys, passwords, tokens, credentials
- **Plain Variables** (60+): URLs, ports, feature flags, configuration

## Testing Your Agent

### 1. Point your agent to this repository:
```bash
cd /home/claude/test-env-repo
```

### 2. Run your detection agent

### 3. Verify Results:
Compare against `EXPECTED_VARIABLES.md` which contains:
- All 120+ expected variables
- Their types (secret/variable)
- File locations where each is found
- Classification rationale

### 4. Key Test Cases:

#### Easy Cases (Should detect):
- Variables in .env.example files
- Simple process.env.VAR_NAME usage
- os.environ['VAR_NAME'] in Python
- os.Getenv("VAR") in Go

#### Medium Cases (Should detect):
- Variables in config objects
- Environment-specific configurations
- Variables with default values
- Docker Compose environment sections

#### Hard Cases (Should detect):
- Kubernetes ConfigMaps and Secrets
- Variables in shell scripts ($VAR, ${VAR})
- Variables with complex expressions
- Variables referenced in multiple files

#### Classification Challenges:
- DATABASE_URL → Secret (contains credentials)
- DATABASE_PORT → Variable (just a port number)
- JWT_SECRET → Secret (authentication key)
- NODE_ENV → Variable (environment name)
- STRIPE_API_KEY → Secret (API credential)
- ENABLE_ANALYTICS → Variable (feature flag)

### 5. Expected Detection Patterns:

**Node.js patterns:**
- `process.env.VARIABLE_NAME`
- `process.env.VAR || 'default'`

**Python patterns:**
- `os.environ['VAR']`
- `os.getenv('VAR')`
- `os.getenv('VAR', 'default')`
- `os.environ.get('VAR')`

**Go patterns:**
- `os.Getenv("VAR")`

**Shell patterns:**
- `$VARIABLE`
- `${VARIABLE}`
- `${VARIABLE:-default}`

**Docker/K8s patterns:**
- `${VARIABLE}` in docker-compose.yml
- configMapKeyRef in Kubernetes
- secretKeyRef in Kubernetes

### 6. Success Criteria:
- ✅ Detects 100+ variables (ideally all 120+)
- ✅ Correctly classifies 90%+ as secret/variable
- ✅ Provides accurate file paths
- ✅ Handles multiple languages
- ✅ No false positives (non-existent variables)
- ✅ Handles variables with defaults gracefully

### 7. Common Pitfalls to Avoid:
- ❌ Missing variables in complex expressions
- ❌ Misclassifying secrets as plain variables
- ❌ Not detecting variables in .env.example files
- ❌ Missing shell script variables
- ❌ Not handling Kubernetes ConfigMaps/Secrets
- ❌ Duplicate entries for the same variable

## Validation

After running your agent, check:
1. Total count matches expected range
2. All critical secrets are marked as "secret"
3. File paths are relative and accurate
4. No duplicates in the output
5. JSON format is valid

## Example Expected Output (Partial):
```json
{
  "variables": [
    {
      "key": "DATABASE_URL",
      "type": "secret",
      "reason": "Found in backend/index.js"
    },
    {
      "key": "DATABASE_PASSWORD",
      "type": "secret",
      "reason": "Found in .env.example"
    },
    {
      "key": "PORT",
      "type": "variable",
      "reason": "Found in backend/index.js"
    },
    {
      "key": "NODE_ENV",
      "type": "variable",
      "reason": "Found in backend/index.js"
    }
  ]
}
```
