import photo from './../../assets/Photos/beautiful_placeholder.png'
import s from './Photos.css'
export const Photos = () => {
    return (
        <div className={s.photos}>
            <div className={s.photosWrapper}>
                <img src={photo} alt="photo1" />
                <img src={photo} alt="photo2" />
                <img src={photo} alt="photo3" />
                <img src={photo} alt="photo4" />
                <img src={photo} alt="photo5" />
                <img src={photo} alt="photo6" />
                <img src={photo} alt="photo7" />
                <img src={photo} alt="photo8" />
                <img src={photo} alt="photo9" />
                <img src={photo} alt="photo10" />
                <img src={photo} alt="photo11" />
                <img src={photo} alt="photo12" />
            </div>
        </div>
    )
}
