import { motion } from "framer-motion";

export const Background = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: -10,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "linear-gradient(25deg, #003696 0%, #001021 100%)",
        }}
      >
        <motion.svg
          style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="400 320 3059.1690673828125 1559.416015625"
        >
          <motion.path
            d="M849-75s431,8.3,504.42,210.55c16.81,46.31,5.87,99.73-5,148.09-26.74,119.51-124.32,171.84-240.72,168.45-180.3-5.24-337.64-153.17-519.28-108.44C414.18,386.54,384,592.6,385,744.22c2,297.57-158.56,419.51-320.76,466.87-162,47.29-410.49-48.22-359.43-388C-163.89-50.67,290.5-75,849-75Z"
            fill={"url(#path1)"}
            id="SvgjsPath1002"
            transform="matrix(1,0,0,1,397.07733154296875,337.0047302246094)"
          />
          <motion.path
            d="M-366.4,341.92C-267.78-127.85,198.46-424.15,665.65-314c294.46,69.44,562.94,194.11,547.71,345.5-4.93,49-17.18,98.41-38.82,143-53.46,110.18-160.45,138.72-273,108.7C727.3,236.74,608.11,56.65,421.06,58.49c-179.49,1.78-256.15,195.4-290,343.22C107,506.87,72.72,585.54,32.64,643.86c-145.48,211.69-476.85,68.73-424.08-182.64Z"
            id="SvgjsPath1003"
            fill="url(#path2)"
            transform="matrix(1,0,0,1,397.07733154296875,337.0047302246094)"
          />
          <g>
            <defs>
              <linearGradient id="path1" gradientTransform="rotate(58)">
                <stop offset="0%" stopColor="rgba(152,72,171,1)" />
                <stop offset="100%" stopColor="rgba(255,49,77,1)" />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="path2" gradientTransform="rotate(58)">
                <stop offset="0%" stopColor="rgb(89, 210, 205)" />
                <stop offset="100%" stopColor="rgb(25, 40, 255)" />
              </linearGradient>
            </defs>
          </g>
        </motion.svg>
        <motion.svg
          style={{
            position: "fixed",
            zIndex: -1,
            bottom: 0,
            left: 0,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1400 -400 2800.1690673828125 1590.26416015625"
        >
          <defs>
            <linearGradient id="path1" gradientTransform="rotate(58)">
              <stop offset="0%" stopColor="#9848ab" />
              <stop offset="100%" stopColor="#ff314d" />
            </linearGradient>
            <linearGradient id="path2" gradientTransform="rotate(58)">
              <stop offset="0%" stopColor="rgb(89, 210, 205)" />
              <stop offset="100%" stopColor="rgb(25, 40, 255)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M2677.41,653.8c15.05,609.59-554.09,1069.05-1145.64,921.11-165.62-41.42-290.59-121.51-320.87-263.53-10.27-48.19-5.86-99.72,5-148.08,26.75-119.52,124.33-171.85,240.72-168.46,180.3,5.24,337.65,153.17,519.28,108.44,174.29-42.93,204.46-249,203.45-400.61-1.63-243.53,78.54-367.68,174.3-429.26,135.69-87.24,314.63,9,318.61,170.26Z"
            fill="url(#path1)"
            id="SvgjsPath1000"
            transform="matrix(1,0,0,1,-1205.093994140625,-240.4902801513672)"
          ></motion.path>
          <motion.path
            d="M2868.71,1400.33c-64.62,307.84-361.93,440.76-676.28,429.8C1801,1816.49,1362.09,1716.4,1351,1415.35c-1.82-49.23,17.18-98.4,38.81-143,53.47-110.18,160.45-138.71,273-108.7,174.28,46.49,293.47,226.58,480.53,224.74,179.48-1.77,256.14-195.4,290-343.21,19.32-84.46,45.25-151.84,75.48-205.31,134.36-237.67,498.46-99.14,442.37,168Z"
            fill="url(#path2)"
            id="SvgjsPath1001"
            transform="matrix(1,0,0,1,-1205.093994140625,-240.4902801513672)"
          ></motion.path>
        </motion.svg>
      </div>
    </>
  );
};
