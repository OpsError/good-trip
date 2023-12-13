import CardFull from "../shared/ui/CardFull/CardFull";
import AvatarMax from "../shared/ui/AvatarMax/AvatarMax";
import LikeButton from "../shared/ui/LikeButton/LikeButton";
import SaveButton from "../shared/ui/SaveButton/SaveButton";
import exampleImage from '../example-img.jpg';
import Popup from "../shared/ui/Popup/Popup";

const App = () => {
    // const text = "Король демонов повержен. Миссия отряда поддержки героя наконец-то завершена, участники похода радостно расходятся по домам. Их щедро наградили, и теперь можно беззаботно доживать свой век рядом с близкими. Грустно только красотке Фрирен, ведь она эльф. Дар долголетия превращается в наказание. Девушка становится свидетелем старения и смерти всех своих друзей. Фрирен понимает, что время, проведенное в отряде героя, – лучшие годы ее жизни. И это время безвозвратно ушло. Но так ли это? Эльфийка отправляется в новое путешествие, чтобы найти ответ.";
    return (
        <Popup>
            <CardFull
            highClass="popup"
            avatarComponent={ <AvatarMax highClass="cardfull" imageSrc={exampleImage} /> }
            likeComponent={ <LikeButton highClass="cardFull" isLiked={false} /> }
            saveComponent={ <SaveButton highClass="cardfull" isSaved={false} /> }
            name="Польский багетчик"
            username="bagietka"
            imageSrc={exampleImage}
            title="Как я сходила в спортзал"
            description="Спойлер: здорово!!"
            />
        </Popup>
    );
}

export default App;