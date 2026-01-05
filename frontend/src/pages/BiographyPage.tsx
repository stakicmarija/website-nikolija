import Top from "../components/Top";
import './BiographyPage.css'

export default function BiographyPage() {
  return (
    <>
      <Top title='Biography' />
      <div className="biography-container has-top">
        <img src="/images/nikiBio.jpeg" className="top-image" />
        <div className="about-nikolija suisse-text">
          <strong className="artist-name">Nikolija Stanojević</strong> (Mag. art / Mag. Kunst) is a visual artist based
          in Vienna and Belgrade, whose practice encompasses painting, textile,
          installation, and sculpture. Her work explores the body, objects as characters,
          and emotions through expressive distortion and material transformation,
          and she continues to investigate these themes across a range of media. 
          <br />
          She completed her Mag. art (Kunst) degree at the University of Applied Arts in Vienna,
          in the Painting and Animation program, under Professor Judith Eisler. During her studies,
          she further specialized in fashion design at the BAU Art and Design University in Barcelona.
          <br />
          Prior to that, she graduated from the School of Design in Belgrade,
          specializing as a fine arts technician. After nine years of studying fine arts in Belgrade,
          Vienna, and Barcelona, she has developed an artistic language shaped by the ability to synthesize diverse experiences and influences.
          <br />
          Her work has been presented in numerous group and solo exhibitions.
        </div>


      </div>
    </>
  )
}