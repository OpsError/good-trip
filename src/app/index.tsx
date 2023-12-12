import FormAuth from "../shared/ui/FormAuth/FormAuth";
import SigninInputs from "../shared/ui/SignInputs/SigninInputs";
import SubmitBottom from "../shared/ui/SubmitBottom/SubmitBottom";

const App = () => {
    // const text = "Король демонов повержен. Миссия отряда поддержки героя наконец-то завершена, участники похода радостно расходятся по домам. Их щедро наградили, и теперь можно беззаботно доживать свой век рядом с близкими. Грустно только красотке Фрирен, ведь она эльф. Дар долголетия превращается в наказание. Девушка становится свидетелем старения и смерти всех своих друзей. Фрирен понимает, что время, проведенное в отряде героя, – лучшие годы ее жизни. И это время безвозвратно ушло. Но так ли это? Эльфийка отправляется в новое путешествие, чтобы найти ответ.";
    return (
        <>
            <FormAuth highClass="main" title="Вход" countInputs={2}>
                <SigninInputs 
                buttonSubmit={<SubmitBottom highClass="formAuth" textButton="Войти" />}
                />
            </FormAuth>
        </>
    );
}

export default App;