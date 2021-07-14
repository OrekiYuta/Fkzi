## Fkzi
Daily epidemic surveillance

Display on 👉 http://virus.orekiyuta.cn/

### Interface
- https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5
- https://sa.sogou.com/new-weball/page/sgs/epidemic?type_page=VR
- http://top.baidu.com/buzz?b=1&fr=topindex
- https://www.qq.com/

### Usage
1. Git clone 
0. Build database from db/virus.sql
0. Run 
    - cd to project root
    - `gunicorn -b 127.0.0.1:5000 -D app:app`
0. Configure nginx
0. Finally, set the corntab
- Read more , to https://www.orekiyuta.cn/archives/reptilesAndRaspberries/
