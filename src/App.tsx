import "./App.css";
import { Link } from "./component/Link";
import icon from "/iconあくらくうcircle.png";

function App() {
    return (
        <main className="flex flex-col items-center justify-center gap-16 pt-16 pb-4">
            <div className="flex flex-col justify-center items-center">
                <img src={icon} alt="Logo" className="w-24 h-24 rounded-full" />
                <h1 className="text-center mt-2 font-bold text-xl">
                    あくらくう
                </h1>
                <div className="text-xs">
                  人々はみな、之を変態と言ふ。
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Link
                    url="https://twitter.com/akurakuu"
                    serviceName="Twitter"
                    description="日常生活をつぶやきまくるやかましいやつ"
                />
                <Link
                    url="https://github.com/akurakuu"
                    serviceName="Github"
                    description="パスタコード専門店"
                />
                <Link
                    url="https://unsplash.com/ja/@akurakuu"
                    serviceName="Unsplash"
                    description="撮った写真をばらまくなどする"
                />
            </div>

            {/* 
        Twitter
        Github
        Unsplash
        Youtube
        Instagram
        Discord
        Twitch
        BlueSky
        
      */}
        </main>
    );
}

export default App;
