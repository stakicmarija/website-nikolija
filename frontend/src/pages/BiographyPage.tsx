import BottomNav from "../components/BottomNav";
import TopWithPicture from "../components/TopWithPicture";
import './BiographyPage.css'

export default function BiographyPage() {
  return(
    <>
      <div className="biography-container">
        <TopWithPicture title='Biography'/>

        <div className="about-nikolija suisse-text">
              Lorem ipsum dolor sit amet consectetur. Augue pretium est nisl id duis velit sit hendrerit. Nibh eget mattis feugiat mauris donec suspendisse. Cursus risus nisl dui ornare dignissim aliquet massa. Ultrices mauris a purus a pretium ut fringilla. Sem velit in feugiat in. Et viverra faucibus quis ac consectetur molestie. 
              Felis sodales in maecenas malesuada in vitae mauris eget risus. 
              Rhoncus feugiat sem velit nisl urna ut in neque. 
              Morbi rhoncus enim aenean odio sed.
              At habitasse convallis porta nisl nibh nibh diam. 
              Orci tincidunt malesuada accumsan pellentesque.
              Aliquam tempus aliquam viverra adipiscing fermentum sed. 
              <br />
              Id faucibus at urna lectus felis nisl iaculis.
                Lectus consectetur neque malesuada neque magna in.
                Et dignissim vitae enim elementum ultricies magna vivamus lobortis lorem.
                  Nulla urna mi dictum magnis massa.
              Tenim placerat pharetra sit. 
              Nulla nunc sit gravida interdum facilisis facilisis gravida sit id. 
              Malesuada tristique eget faucibus consectetur odio consectetur ac. <br />
              Ut eu habitant odio amet commodo orci morbi odio malesuada. 
              Fermentum non suspendisse proin non mattis diam suspendisse id vitae.
              Massa adipiscing ultrices amet volutpat integer bibendum in tellus. 
              Faucibus dolor amet suspendisse nunc sit senectus.
        </div>

      </div>

      <BottomNav />
    </>
  )
}