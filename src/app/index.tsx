import Header from "../shared/ui/Header/Header";

const App = () => {
    // const text = "Король демонов повержен. Миссия отряда поддержки героя наконец-то завершена, участники похода радостно расходятся по домам. Их щедро наградили, и теперь можно беззаботно доживать свой век рядом с близкими. Грустно только красотке Фрирен, ведь она эльф. Дар долголетия превращается в наказание. Девушка становится свидетелем старения и смерти всех своих друзей. Фрирен понимает, что время, проведенное в отряде героя, – лучшие годы ее жизни. И это время безвозвратно ушло. Но так ли это? Эльфийка отправляется в новое путешествие, чтобы найти ответ.";
    return (
        <>
            <Header isLogined={true} username="bagietka" cityName="Moscow" />
        </>
    );
}

export default App;