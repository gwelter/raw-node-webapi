echo '\nrequest all heroes'
curl localhost:3000/heroes

echo '\n\nrequest single hero'
curl localhost:3000/heroes/1

echo '\n\ncreate invalid hero'
curl --silent -X POST \
    --data-binary '{"invalid": "data"}' \
    localhost:3000/heroes

echo '\n\ncreate valid hero'
curl --silent -X POST \
    --data-binary '{ "name": "Superman", "age": 33, "power": "Super Strength"}' \
    localhost:3000/heroes