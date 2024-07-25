import React, { FC, JSX } from 'react';

const BG_IMAGE = 'http://theme-brothers.com/AquraHTML/assets/img/content/bio2.jpg';

const BiographyContent: FC = (): JSX.Element => {
  return (
    <section style={{backgroundImage: `url(${BG_IMAGE})`}}
             className="biography padding background-properties" id="content">
      <div className="container">
        <div className="sectionTitle paddingBottom">
          <span className="heading-t3"/>
          <h2><a href="albums.html">Biography</a></h2>
          <span className="heading-b3"/>
        </div>
        {/* end sectionTtile */}
        <div className="row">
          <div className="col-sm-6">
            <p>Emi Haze graduated from the Institute
              of Design in Verona with
              a degree in Graphic Design
              and Advertising Design.I live in the north-east of Italy and my huge passion is digital art.
              Art and painting connected to technology have always been my strongest passions. People think I am calm,
              quiet, sometimes introvert, really creative, inspired and perfectionist.
              In my opinion everything in every moment has an artistic side, the aesthetics of things, people around
              me...
              for me everything has its own importance, images, textures, sounds, fragrances, my creativity is costantly
              stimulated.</p>
            <p>I currently work as freelance and in the last years I focused on personal projects and creations in order
              to build,
              my own wide portfolio that could distinguish me both in style, technique and creativity.
              In my first works i focused on a graphic style based on construction and deconstruction of the human body
              using various tools and graphic effects that render it almost a sketch.</p>
            <p>In my recent works I tried to merge the human body with nature or rather with the four elements of fire,
              air, water and earth, and even with a fifth esoteric element: the Aristotelian ether, that includes all
              the others,
              the essence of celestial bodies, eternal and unchangeable in comparison with the earth as a place of
              change.
              The result is the vision of my imaginative world hanging between reality and fantasy, dream and utopia
              and in which color and sensitivity have the predominant role.</p>
            <p>I currently work as freelance and in the last years I focused on personal projects and creations in order
              to build,
              my own wide portfolio that could distinguish me both in style, technique and creativity.
              the essence of celestial bodies, eternal and unchangeable in comparison with the earth as a place of
              change.
              The result is the vision of my imaginative world hanging between reality and fantasy, dream and utopia
              and in which color and sensitivity have the predominant role.</p>
          </div>
          <div className="col-sm-6">
            <p>I currently work as freelance and in the last years I focused on personal projects and creations in order
              to build,
              my own wide portfolio that could distinguish me both in style, technique and creativity.
              In my first works i focused on a graphic style based on construction and deconstruction of the human body
              using various tools and graphic effects that render it almost a sketch.
              In my recent works I tried to merge the human body with nature or rather with the four elements of fire,
              air, water and earth, and even with a fifth esoteric element: the Aristotelian ether, that includes all
              the others,
              the essence of celestial bodies, eternal and unchangeable in comparison with the earth as a place of
              change.
              The result is the vision of my imaginative world hanging between reality and fantasy, dream and utopia
              and in which color and sensitivity have the predominant role.</p>
            <p>Photoshop is the software I prefer to conceive my works, in which I also include the digital version of
              hand-made elements,
              such as scratches and ink marks, acrylic or watercolor stains. The outcome is technically always appealing
              and intriguing.
              Music is the key of this creative process. I could mention Sigur Rós, Radiohead, Bloc Party, Coldplay,
              Bjork etc.
              I’m also fond of movies, I love every kind cinema, especially indie movies and art movies.</p>
            <p>Emi Haze graduated from the Institute
              of Design in Verona with
              a degree in Graphic Design
              and Advertising Design.I live in the north-east of Italy and my huge passion is digital art.
              Art and painting connected to technology have always been my strongest passions. People think I am calm,
              quiet, sometimes introvert, really creative, inspired and perfectionist.
              In my opinion everything in every moment has an artistic side, the aesthetics of things, people around
              me...
              for me everything has its own importance, images, textures, sounds, fragrances, my creativity is costantly
              stimulated.</p>
            <div className="signature">
              <a href="http://www.emihaze.com/showcase">Emili Haze:</a>
              <div className="imgSignuature">
                <img src="assets/img/content/signature.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end container */}
    </section>

  );
};

export default BiographyContent;