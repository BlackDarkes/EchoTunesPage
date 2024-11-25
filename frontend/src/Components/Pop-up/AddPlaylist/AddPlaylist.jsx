import "./style/AddPlaylist.css";
import BurgerClose from "../../AssetsBlocks/AsideBlock/Mobile/BurgerClose";
import DownloadImage from "./Assets/DownloadImage";

const AddPlaylist = ({open, setOpen}) => {
    return (
        <div className={open ? "addPlaylist active" : "addPlaylist"}>
            <div className="addPlaylist__block">
                <div className="add">
                    <button type="button" className="add__close" onClick={() => setOpen(false)}><BurgerClose/></button>
                    <form action="" style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="add-textblock">
                            <input type="text" className="add-textblock__name" placeholder="Название плейлиста" maxLength={50} required/>
                            <textarea className="add-textblock__description" placeholder="Введите краткое описание" maxLength={140}/>
                            <input type="submit" className="add-textblock__enter" value="Сохранить" />
                        </div>
                        <div className="add-download">
                            <label htmlFor="download" className="download-block">
                                <DownloadImage/>
                                <p className="download-block__text">Загрузить картинку</p>
                            </label>
                            <input type="file" name="download" id="download" className="add-download__file" accept=".mp3" required/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default AddPlaylist;