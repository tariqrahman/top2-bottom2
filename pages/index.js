// import { useState } from 'react';

const Home = (data) => {
  // const [spCount, setSpCount] = useState(0);
  let subdata = data.data.items;
  let jSubdata = data.jdata.items;
  let sSubdata = data.sdata.items;
  let pSubdata = data.pdata.items;

  let tariqData = data.tariqData;
  let jaceData = data.jaceData;
  let sudData = data.sudData;
  let pranavData = data.pranavData;

  console.log(tariqData);

  function checkHours(person) {
    let duoVictories = person.duoVictories;
    let soloVictories = person.soloVictories;
    let threeVictories = person["3vs3Victories"];
    let totalTime = soloVictories + duoVictories + threeVictories;
    let numMinutes = (totalTime * 3) + (totalTime * 3 * 0.3);
    const hours = Math.floor(numMinutes / 60);
    const minutes = Math.round(numMinutes % 60);
    let formatTime = hours + " hours";
    return formatTime;
  }

  let tariqHours = checkHours(tariqData);
  let jaceHours = checkHours(jaceData);
  let sudHours = checkHours(sudData);
  let pranavHours = checkHours(pranavData);

  // function getCentDrag(i) {
  //   console.log(data);
  //   // console.log(subdata[i].battle.teams[0][0].name);
  //   if (
  //     subdata[i].battle.teams[0][0].name === 'CentCrazy' &&
  //     subdata[i].battle.teams[0][1].name === 'Dragonxt'
  //   ) {
  //     return true;
  //   } else if (
  //     subdata[i].battle.teams[1][0].name === 'CentCrazy' &&
  //     subdata[i].battle.teams[1][1].name === 'Dragonxt'
  //   ) {
  //     return true;
  //   } else if (
  //     subdata[i].battle.teams[0][1].name === 'CentCrazy' &&
  //     subdata[i].battle.teams[0][0].name === 'Dragonxt'
  //   ) {
  //     return true;
  //   } else if (
  //     subdata[i].battle.teams[1][1].name === 'CentCrazy' &&
  //     subdata[i].battle.teams[1][0].name === 'Dragonxt'
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // function isTariqVictory(i) {
  //   if (subdata[i].battle.result === 'victory') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // function spCounter(i) {
  //   if (!isTariqVictory(i) && getCentDrag(i)) {
  //     setSpCount(spCount + 1);
  //     console.log(spCount);
  //   }
  // }

  function countTariqWins() {
    let tWins = 0;
    for (var j = 0; j < subdata.length; j++) {
      if (
        subdata[j].battle.result === 'victory' &&
        subdata[j].battle.type === 'friendly'
      ) {
        tWins++;
        console.log(tWins);
      }
    }
    return tWins;
  }

  function countJaceWins() {
    let jWins = 0;
    for (var j = 0; j < jSubdata.length; j++) {
      if (
        jSubdata[j].battle.result === 'victory' &&
        jSubdata[j].battle.type === 'friendly'
      ) {
        jWins++;
      }
    }
    return jWins;
  }

  function countSudWins() {
    let sWins = 0;
    for (var j = 0; j < sSubdata.length; j++) {
      if (
        sSubdata[j].battle.result === 'victory' &&
        sSubdata[j].battle.type === 'friendly'
      ) {
        sWins++;
      }
    }
    return sWins;
  }

  function countPranavWins() {
    let pWins = 0;
    for (var j = 0; j < pSubdata.length; j++) {
      if (
        pSubdata[j].battle.result === 'victory' &&
        pSubdata[j].battle.type === 'friendly'
      ) {
        pWins++;
      }
    }
    return pWins;
  }

  let jaceWins = countJaceWins();
  let tariqWins = countTariqWins();
  let sudWins = countSudWins();
  let pranavWins = countPranavWins();

  const people = [
    {
      name: 'tariq',
      winCount: tariqWins,
      imageUrl:
        'https://brawlstars.b-cdn.net/wp-content/uploads/2022/05/brawl-stars-true-gold-spike.png',
      hours: tariqHours,
      sweat: "for fun"
    },
    {
      name: 'jace',
      winCount: jaceWins,
      imageUrl:
        'https://www.brawlstarsarena.com/wp-content/uploads/2020/10/BSA_avatar_True_Gold_Leon.png',
      hours: jaceHours,
      sweat: "play all day"
    },
    {
      name: 'pranav',
      winCount: pranavWins,
      imageUrl:
        'https://www.brawlstarsarena.com/wp-content/uploads/2020/10/BSA_avatar_Sakura_Spike.png',
      hours: pranavHours,
      sweat: "sweat"
    },
    {
      name: 'sud',
      winCount: sudWins,
      imageUrl:
        'https://www.brawlstarsarena.com/wp-content/uploads/2020/10/BSA_avatar_El_Primo.png',
      hours: sudHours,
      sweat: "for fun"
    },
    // More people...
  ];
  return (
    <>
      <div className='bg-gray-80 py-24 sm:py-32 h-screen'>
        <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
          <div className='mx-auto max-w-2xl'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl'>
              top 2 bottom 2
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-400'>
              the end of recency bias
            </p>
          </div>
          <ul className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-6'>
            {people.map((person) => (
              <li
                key={person.name}
                className='rounded-2xl bg-gray-200 px-8 py-10 shadow-lg'
              >
                <img
                  className='mx-auto h-48 w-48 rounded-full md:h-56 md:w-56'
                  src={person.imageUrl}
                  alt=''
                />
                <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-800'>
                  {person.name}
                </h3>
                <p className='text-sm leading-6 text-gray-600'>
                  # recent wins: {person.winCount}
                </p>
                <p className='text-sm leading-6 text-gray-600'>
                  win percentage: {(person.winCount / 25) * 100}%
                </p>
                <p className='text-sm leading-6 text-gray-600'>hours spent: {person.hours}</p>
                <p className='text-sm leading-6 text-gray-600'>sweat status: {person.sweat}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ req }) {
  // battle-log endpoints
  const TARIQ_ENDPOINT =
    'https://api.brawlstars.com/v1/players/%23JRCU2J9/battlelog';
  const JACE_ENDPOINT =
    'https://api.brawlstars.com/v1/players/%2328LJLOYJ8/battlelog';
  const SUD_ENDPOINT =
    'https://api.brawlstars.com/v1/players/%232OLLRGYQ/battlelog';
  const PK_ENDPOINT =
    'https://api.brawlstars.com/v1/players/%23RCP8GLP/battlelog';

  // standard player endpoints
  const TARIQ_PL_ENDPOINT = 'https://api.brawlstars.com/v1/players/%23JRCU2J9';
  const JACE_PL_ENDPOINT = 'https://api.brawlstars.com/v1/players/%2328LJLOYJ8';
  const SUD_PL_ENDPOINT = 'https://api.brawlstars.com/v1/players/%232OLLRGYQ';
  const PK_PL_ENDPOINT = 'https://api.brawlstars.com/v1/players/%23RCP8GLP';

  // api key
  const access_token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZlOTJlYjI2LWZmYzgtNDYwMy04NTdiLTI3ZTgxYzZjMzMyYSIsImlhdCI6MTY4MTExMTIwMywic3ViIjoiZGV2ZWxvcGVyLzQzNzE0NDQxLTA0ZDItNDVkZS1hY2VlLWIzMzgxYTYxMTE0ZiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTY0LjY3LjIxLjIzNCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.h1fZQnqfPzWTXVwT595Was086JcNC6Vy_aOeGS3bhZb1ZGj1beRcL63HekAdLx_hP-gpvqn2_XcHYETWUyzeFQ';

  const response = await fetch(TARIQ_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const jresponse = await fetch(JACE_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const sresponse = await fetch(SUD_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const presponse = await fetch(PK_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const tariqResponse = await fetch(TARIQ_PL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const jaceResponse = await fetch(JACE_PL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const sudResponse = await fetch(SUD_PL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const pranavResponse = await fetch(PK_PL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await response.json();
  const jdata = await jresponse.json();
  const sdata = await sresponse.json();
  const pdata = await presponse.json();
  const tariqData = await tariqResponse.json();
  const jaceData = await jaceResponse.json();
  const sudData = await sudResponse.json();
  const pranavData = await pranavResponse.json();

  return {
    props: {
      data,
      jdata,
      sdata,
      pdata,
      tariqData,
      jaceData,
      sudData,
      pranavData,
    },
  };
}

export default Home;
