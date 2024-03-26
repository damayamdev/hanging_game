const HEAD = (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      border: "10px solid #fdddca",
      position: "absolute",
      top: "50px",
      right: "-25px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "90px",
      background: "red",
      position: "absolute",
      zIndex: 999,
      top: "110px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "#fdddca",
      position: "absolute",
      top: "150px",
      right: "-80px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "#fdddca",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "#fdddca",
      position: "absolute",
      top: "190px",
      right: "-70px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "#fdddca",
      position: "absolute",
      top: "190px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG]

type numberOfGuessesProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: numberOfGuessesProps) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "#C19A6B",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "150px",
          background: "#C19A6B",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "300px",
          width: "10px",
          background: "#C19A6B",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "#35682d" }} />
    </div>
  );
};

export default HangmanDrawing;
