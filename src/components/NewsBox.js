
import Card from "./ui/Card/Card";
import Styles from "./NewsBox.module.css";

function NewsBox(props) {
    console.log(props.data[0].document.fileContent)


  const mappedNews = props.data.map((item) => {
    return (
      <Card key={item.id} className={Styles.newsitem}>
        <p className={Styles.text}>{item.descriptionStr}</p>
        <img src={`data:image/jpeg;base64,${item.document.fileContent}`} width="200px" height="200px"/>
        <p className={Styles.text}>{item.insertDateStr}</p>
      </Card>
    );
  });
  return (
    <div>
      <Card className={Styles.news}>
        <h1 className={Styles.title}>{props.title}</h1>
        <div className={Styles.newsdiv}>{mappedNews}</div>
      </Card>
    </div>
  );
}

export default NewsBox;
