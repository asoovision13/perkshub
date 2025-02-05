import * as React from "react"
const Logo = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="#FFDE09"
      d="M1.585 27.91v-18H4.62v2.164h.18c.158-.318.383-.656.673-1.014.29-.364.681-.674 1.176-.93.494-.26 1.125-.391 1.892-.391 1.011 0 1.923.258 2.736.775.818.512 1.466 1.27 1.943 2.276.483 1 .724 2.227.724 3.682 0 1.437-.236 2.659-.707 3.664-.472 1.006-1.114 1.773-1.926 2.302-.813.528-1.733.792-2.762.792-.75 0-1.372-.125-1.866-.375-.495-.25-.892-.551-1.193-.903a5.85 5.85 0 0 1-.69-1.015H4.67v6.972H1.585Zm3.026-11.456c0 .847.12 1.589.358 2.225.244.636.593 1.134 1.048 1.492.46.352 1.017.528 1.67.528.682 0 1.253-.182 1.714-.546.46-.369.806-.872 1.04-1.508.238-.642.357-1.372.357-2.19 0-.813-.116-1.534-.35-2.165-.232-.63-.579-1.125-1.039-1.483-.46-.358-1.034-.537-1.722-.537-.659 0-1.218.173-1.678.52-.46.346-.81.832-1.049 1.457-.233.625-.35 1.361-.35 2.207Z"
    />
    <path
      fill="#000"
      d="M18.665 21.136c-.63 0-1.175-.139-1.632-.417a2.803 2.803 0 0 1-1.053-1.176c-.244-.506-.366-1.094-.366-1.765 0-.67.122-1.261.366-1.772a2.89 2.89 0 0 1 1.031-1.202c.444-.29.96-.435 1.552-.435a3.1 3.1 0 0 1 1.01.17c.332.114.634.3.907.555.273.253.49.588.652 1.005.162.418.243.932.243 1.543v.426h-5.046v-.87h4.023c0-.369-.074-.698-.221-.988a1.67 1.67 0 0 0-.622-.686 1.742 1.742 0 0 0-.947-.251c-.4 0-.747.1-1.04.298-.289.196-.512.452-.668.767a2.253 2.253 0 0 0-.235 1.014v.58c0 .494.085.913.256 1.257.173.34.413.6.72.78a2.11 2.11 0 0 0 1.07.264c.264 0 .503-.037.716-.11.216-.078.402-.191.558-.342.156-.153.277-.343.362-.57l.972.272c-.102.33-.274.62-.516.87-.241.246-.54.44-.895.579a3.318 3.318 0 0 1-1.197.204Zm4.24-.136v-6.546h.971v.99h.069c.119-.325.335-.588.647-.79a1.907 1.907 0 0 1 1.057-.302c.074 0 .166.002.277.005.11.002.195.007.252.012v1.023a2.99 2.99 0 0 0-.235-.038c-.12-.02-.246-.03-.38-.03-.317 0-.601.067-.851.2a1.47 1.47 0 0 0-.801 1.334V21h-1.006Zm5.402-2.386-.017-1.245h.205l2.863-2.915h1.245L29.55 17.54h-.085l-1.159 1.074ZM27.37 21v-8.727h1.005V21H27.37Zm4.159 0-2.557-3.239.716-.698L32.808 21h-1.28Zm7.004-5.08-.903.256a1.682 1.682 0 0 0-.251-.439 1.22 1.22 0 0 0-.444-.358c-.187-.093-.427-.14-.72-.14-.4 0-.734.092-1.001.277-.264.181-.396.413-.396.694 0 .25.09.448.272.593.182.144.466.265.852.362l.972.238c.585.143 1.021.36 1.308.652.287.29.43.664.43 1.121 0 .375-.107.71-.323 1.006a2.147 2.147 0 0 1-.895.699c-.384.17-.83.255-1.338.255-.668 0-1.22-.145-1.658-.434-.437-.29-.714-.713-.83-1.27l.954-.239c.09.352.263.617.515.793.256.176.59.264 1.002.264.469 0 .84-.1 1.116-.298.279-.202.418-.444.418-.725a.761.761 0 0 0-.239-.57c-.159-.157-.403-.273-.733-.35l-1.09-.256c-.6-.142-1.04-.362-1.322-.66-.278-.301-.417-.678-.417-1.13 0-.369.104-.696.31-.98.211-.284.497-.507.857-.669a3.008 3.008 0 0 1 1.236-.243c.648 0 1.156.142 1.526.427.372.284.636.659.792 1.125Zm2.64 1.143V21h-1.007v-8.727h1.006v3.204h.086a1.85 1.85 0 0 1 .69-.805c.31-.202.721-.303 1.236-.303.446 0 .836.09 1.172.269.335.176.595.447.78.814.187.363.28.826.28 1.389V21h-1.005v-4.09c0-.52-.135-.923-.405-1.207-.267-.287-.638-.43-1.112-.43-.33 0-.625.07-.886.209-.26.139-.464.342-.614.609-.148.267-.222.59-.222.971Zm10.208 1.26v-3.869h1.006V21h-1.006v-1.108h-.068a2.147 2.147 0 0 1-.716.848c-.324.23-.733.345-1.227.345-.41 0-.773-.09-1.09-.268a1.88 1.88 0 0 1-.75-.818c-.183-.367-.274-.828-.274-1.385v-4.16h1.006v4.091c0 .478.134.858.4 1.142.27.285.614.427 1.032.427.25 0 .504-.064.763-.192.261-.128.48-.324.656-.588.179-.264.268-.601.268-1.01ZM54.365 21v-8.727h1.006v3.221h.085c.074-.113.176-.258.307-.434.134-.18.324-.338.571-.478.25-.142.588-.213 1.014-.213.552 0 1.037.138 1.458.414.42.275.748.666.984 1.171.236.506.354 1.103.354 1.79 0 .694-.118 1.294-.354 1.803-.236.506-.562.898-.98 1.176-.418.276-.9.413-1.445.413-.42 0-.757-.07-1.01-.208a1.871 1.871 0 0 1-.583-.482 6.454 6.454 0 0 1-.316-.452h-.119V21h-.972Zm.989-3.273c0 .495.072.93.217 1.308.145.375.357.67.635.883.279.21.62.315 1.023.315.42 0 .771-.11 1.053-.332.284-.225.497-.526.639-.904.145-.38.217-.804.217-1.27 0-.46-.07-.875-.213-1.244a1.923 1.923 0 0 0-.635-.882c-.281-.219-.635-.328-1.061-.328-.409 0-.753.103-1.031.31a1.868 1.868 0 0 0-.63.862c-.143.366-.214.794-.214 1.282Z"
    />
    <circle cx={62.5} cy={26.5} r={5.5} fill="#FFDE09" />
  </svg>
)
export default Logo
