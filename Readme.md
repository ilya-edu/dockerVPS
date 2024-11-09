### To run
``` bash
docker-compose up
```
### To solve Problem with incorrect node-rode folder permissions
``` bash
sudo chown -R 1000:1000 ./node-red/data
```
### to resolve issue with git add permissions
``` bash
sudo chown -R 1000:1000 mosquitto
```
### To reset git changes
``` bash
git reset --hard HEAD
```