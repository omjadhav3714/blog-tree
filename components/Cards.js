import React from 'react'
import img from './assets/imag.png';
import Image from 'next/image';
import style from './card.module.css';
const Cards = () => {
  return (
    <>
    <div className={style.Maincard}>
        <div className={style.img}>
<Image className={style.img} src={img} alt="found"/>
        </div>
        <div className={style.title}>
<h2>this is title</h2>
        </div>
        <div className={style.subtit}>
            <p>subject</p>
            <p>date</p>
        </div>
<div className={style.disc}>
<p>Reprehenderit enim Lorem quis quis non magna qui sunt dolor irure laborum. Nisi labore tempor et consectetur magna labore cupidatat labore duis proident consequat eiusmod. Eiusmod ex sint aute fugiat eu est qui est culpa labore adipisicing. Dolore duis consequat culpa eu sint esse quis in labore sit nostrud.</p>
<button className={style.btn} >Continue reading</button>
</div>


    </div>
    </>
  )
}

export default Cards