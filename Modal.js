import React from 'react';
import Master_i_Margarita from './master_i_margarita.png';
import mama from './mama.jpg';

function Modal(props){
  const { show, closeModal } = props;  //component is accepting two props(show,closeModal)

  return(
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal}/>  {/*added a div element with overlay class and onClick handler so that we can also close our modal by clicking on overlay*/}
          <div className={show ? "modal" : "hide"}>
            <button onClick={closeModal}>X</button>
            <div className="modal-text">
            <h1 className="modal-text-header">И твой новогодний подарок!</h1>
            <p >Два билета на легендарное представление </p>
            <p className="modal-text-header">Mастер и маргарита</p>
            <img src="https://i.pinimg.com/originals/e8/69/00/e86900306206a0e6bfcb61402db652ef.jpg"></img>
            <p>Город:  <a href="https://www.google.com/maps/place/Freiheitshalle/@50.3201384,11.9009563,17z/data=!3m1!4b1!4m5!3m4!1s0x47a1174d0d86f02b:0x7c255b74df95b06e!8m2!3d50.320135!4d11.903145">Hof</a></p>
            <p>Площадка: <a href="https://www.google.com/maps/place/Freiheitshalle/@50.3201384,11.9009563,17z/data=!3m1!4b1!4m5!3m4!1s0x47a1174d0d86f02b:0x7c255b74df95b06e!8m2!3d50.320135!4d11.903145"> Festsaal Freiheitshalle </a></p>
            <p>Дата: 28 Апреля 2020 19:30</p>
            <p>В сопровождении матери императрицы </p>
            <img src='https://files.slack.com/files-pri/T27SFGS2W-FS1F1HE15/img-20191208-wa0000.jpg'></img>
            <p>Самый мистический спектакль современности возвращается на сцены Германии! Режиссер-постановщик и исполнитель роли Воланда — Сергей АЛДОНИН. В роли Маргариты — популярная актриса театра и кино Екатерина КЛИМОВА.</p>
            <p>Созданный в мастерской Марка Захарова (ГИТИС), спектакль "Мастер и Маргарита" после 50 успешных показов в самом ГИТИСе и на различных фестивалях была включен в постоянный репертуар Московского Драматического Театра им. Станиславского, а позже стал одним из самых ярких спектаклей в репертуаре Театра им. М.А. Булгакова. Сергей Алдонин добавил в инсценировку фрагменты из черновиков романа, неизвестные широкому кругу читателей.</p>
            </div>
          </div>
    </>
  )
}

export default Modal;
