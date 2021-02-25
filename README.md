## FkZi
Daily epidemic surveillance

display on 👉 http://elias.orekiyuta.cn/
### interface
- https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5
- https://sa.sogou.com/new-weball/page/sgs/epidemic?type_page=VR
- http://top.baidu.com/buzz?b=1&fr=topindex
- https://www.qq.com/

### Usage
0. git clone 
0. build database from db/virus.sql
0. run 
    - cd to project root
    - `gunicorn -b 127.0.0.1:5000 -D app:app`
0. configure nginx
0. finally, set the corntab
- read more , to https://www.orekiyuta.cn/archives/reptilesAndRaspberries/
