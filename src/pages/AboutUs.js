import "../css/AboutUs.css";

export default function AboutUs() {
  return (
    <section className="aboutUs">
      <h3>I Live U</h3>
      <p>
        <span>I Love You, I Live You</span>
        사람을 사랑하듯이 사람을 살아갑니다.
      </p>
      <p>
        모든 삶에 가깝게 닿아있는 식사.<br />
        그 짧지만 중요한 시간, 여러분의 곁에 아이리브유가 있습니다.
      </p>

      <div>
        <p className="aboutUsTitle">
          Harmony
        </p>
        <p className="aboutUsContent">
          식사 시간은 얼핏 보기엔 일상적이고 평범한 시간이지만<br />
          다르게 생각해보면 매일 모두에게 공평하게 주어진 시간이기도 합니다.<br />
          <br />
          그렇기에 아이리브유는 여러분의 날들을 아름답고 다채롭게 꾸미며<br />
          그 삶에 조화롭게 녹아들 제품을 만들겠습니다.
        </p>
        <img src="./img/visual_1.png" alt="aboutus" />

        <p className="aboutUsTitle">
          Memory
        </p>
        <p className="aboutUsContent">
          오랜만에 만나는 친구와의 약속, 떨어져있던 가족들과의 만남.<br />
          우리는 사랑하는 사람들과 만날 때 식사를 함께합니다.<br />
          <br />
          그 시간이 더 오래 기억에 남아 후회가 없는 추억이 될 수 있게<br />
          따뜻한 정성과 사랑을 담은 디자인으로 함께하겠습니다.
          <br />
        </p>
        <img src="./img/visual_1.png" alt="aboutus" />

        <p className="aboutUsTitle">
          Daily
        </p>
        <p className="aboutUsContent">
          하루의 시작. 하루의 중간. 하루의 끝.<br />
          그 모든 곳에 식사가 있습니다.<br />
          <br />
          하루를 아름답게 시작하고 끝맺을 수 있도록<br />
          아이리브유가 당신의 삶에서 함께 살아갑니다.
        </p>
        <img src="./img/visual_1.png" alt="aboutus" />
      </div>
    </section>
  );
}