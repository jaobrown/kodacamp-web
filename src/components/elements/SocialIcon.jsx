import React from 'react'

export const SocialIcon = ({ platform, className }) => {
  switch (platform) {
    case 'youtube':
      return (
        <div className={className}>
          <svg
            width={56}
            height={39}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="url(#pattern0)" d="M0 0h56v39H0z" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
              >
                <use
                  xlinkHref="#image0"
                  transform="matrix(.01613 0 0 .02316 0 -.01)"
                />
              </pattern>
              <image
                id="image0"
                width={62}
                height={44}
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAsCAYAAAA93wvUAAACbUlEQVRoBeWav08UQRTHv292wdviZAlcYaPSGJF/QP8CiDXQkPg/HKeN1VU25rTCUokJjdhqwh+iEBsSG4u7C/cj8RDYfeZt3MtoIGeIM/tcrtnJzNy895nPJjO7O4Rzfi9+dJfIBBtseBmgmwTMn9NNbRUDHYC/Ukp7nCY7m9fmPv2ZLNkVzaOjeKaKl0z0iABjt/2vZQZSYn7bH6LenJ3t5Rxj8Oej3kIwjY8E3M0by3Rl4CA5wcMnUXwoXJnVZrd7PZzGh7JCC6iwCaOwjsGrM6YFYLFMhi9gWfzFCmodt++YqanPAIILOpetOklPT+8ZCsKNKwQtEgNhNiBaKZvSSTxEtGxAuD2pY9nambBgCKi5BEsZ6wDaLmNcYux5Wc7Ga/klBpj4l0YY746+j5bA2J3Y2VMH2Zx52Z09rd5o18N4XZN9L+C5SE32vYLLBGix7x1ci/3CwIu2Xyh4kfZVgNv2wVjzse6rAc/t18P4vY91Xx24L/sqwX3YVw2eTwCD//m2OswH13htnfXWDGELDh6kVII/G36rVaLKKyKsuhKiDtylZXsS1YD7sKwO3JdlNeBiOYqiLVC2W7Pzcl4u7FYvwrI9m97Bi7RcGHjRlr2Da7HsFVyTZa/ghvDODqilbOTDuZZkfOUhzPJ01vEVUFGcjiFGdkJAUVLOUxFmw8x7ziMpCyDMhpOzHQCJstxcppMIs2lUal9S5jcuI2kamzl9LczZq6dhP20A2NeUoKNc9gd9fixjj99lXcnjXjIDcv5rMOAHYN4u09qesTBvn/TT+/kZt9+M27eWfaSTQLcAzNnt2st/c6TzJ7Ui+t/u6RPJAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </div>
      )
      break
    case 'instagram':
      return <div>instagram</div>
      break
    case 'twitter':
      return <div>twitter</div>
      break
    default:
      return <div></div>
      break
  }
}
