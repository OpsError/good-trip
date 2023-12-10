import AvatarMini from "../shared/ui/AvatarMini/AvatarMini";
import AvatarMax from "../shared/ui/AvatarMax/AvatarMax";
import LikeButton from "../shared/ui/LikeButton/LikeButton";
import SaveButton from "../shared/ui/SaveButton/SaveButton";
import exampleImage from '../example-img.jpg';

import Popup from "../shared/ui/Popup/Popup";

const App = () => {
    const text = "qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq qwqwq qwqwq qwqqqqqqq";
    return (
        <>
            <Popup
            avatarComponent={<AvatarMax highClass="popup__avatar" imageSrc={exampleImage} />}
            likeComponent={<LikeButton highClass="popup__likes" isLiked={false} />}
            saveComponent={<SaveButton highClass="popup__save" isSaved={false} />}
            name="Польский багетчик"
            username="bagietka"
            imageSrc={exampleImage}
            title="Севодня я ничегр не сделала"
            description={text}
            />
        </>
    );
}

export default App;