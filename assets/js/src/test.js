// THIS IS A TEST
function test() {
  const arr = [ 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33 ];

  const mapped = arr
    .map(item => String.fromCodePoint(item))
    .join('')

  console.log(
    `%c${mapped}`,
    'font-weight: bold; font-size: 2rem; color: red; text-shadow: 2px 2px 0 orange, 4px 4px 0 yellow, 6px 6px 0 green, 8px 8px 0 blue, 10px 10px 0 indigo, 12px 12px 0 violet;'
  );
}

export default test;
