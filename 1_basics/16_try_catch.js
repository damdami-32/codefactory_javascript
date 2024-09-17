/**
 * try... catch
 * 
 * 1) 발생시킬 때 -> '던진다'고한다. (throw)
 * 2) 명시적으로 인지할 때 -> '잡는다'고한다. (catch)
 * 3) 에러 발생 유무와 상관없이 finally는 무조건 실행 (optional)
 */

function runner() {
    try {
        console.log('Hello');

        //throw new Error('큰 문제가 생겼습니다!');
    
        console.log('Code Factory');
    } catch(e){
        console.log('---catch---');
        console.log(e);
    } finally {
        console.log('---finally---');
    }

}
runner();