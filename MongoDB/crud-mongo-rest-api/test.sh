curl -H "Content-Type: application/json" -X POST -d '{"balance": 100, "name":"checking"}'  "http://localhost:3000/accounts" 
curl -H 'Content-Type: application/json' -X PUT -d '{"balance": 200, "name": "savings"}'  "http://localhost:3000/accounts/5c421fb2cf249b5fe532c3d0" 
curl "http://localhost:3000/accounts" 
curl -X DELETE "http://localhost:3000/accounts/5c421fb2cf249b5fe532c3d0" 