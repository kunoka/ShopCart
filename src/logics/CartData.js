/**
 * Created by harry on 23/07/2017.
 */

import { observable } from 'mobx';

const cartData = observable([
  {
    id: '1461621270',
    name: '珠江·恺撒堡三角钢琴 GH275',
    price: 5800000,
    count: 1,
    img: 'https://img10.360buyimg.com/cms/s80x80_jfs/t3058/118/1435733835/95715/5b4e62ef/57ccdc9fNa8cc3da1.jpg',
    checked: false,
  },
  {
    id: '140416051797',
    name: '【京东超市】蓓琳娜（BELLINA）3L PDO特级初榨橄榄油 西班牙原装原瓶进',
    price: 61800000,
    count: 1,
    img: 'https://img10.360buyimg.com/cms/s80x80_jfs/t2860/110/3448267678/342867/9df65cd3/578db6e1N98e8811c.jpg',
    checked: false,
  },
]);

cartData.minus = (index) => {
  cartData[index].count -= 1;
};
cartData.plus = (index) => {
  cartData[index].count += 1;
};
cartData.check = (checked, index) => {
  cartData[index].checked = checked;
};

export default cartData;