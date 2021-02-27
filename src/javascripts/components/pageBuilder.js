const pageBuilder = () => {
  document.querySelector('#progress').innerHTML = `<div class="container header">
                                                <h1 class="title"><i class="fas fa-trophy"></i> TAMAGOTCHI たまごっち <i class="fas fa-trophy"></i></h1>
                                                <div class="progress">
                                                <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                </div>`;
  document.querySelector('#eat').innerHTML = `<div class="eat pt-2">
                                                <div class="mb-2">Let's EAT</div>
                                                <img class="eatImg" src="https://blogimg.goo.ne.jp/user_image/19/ba/353643b83a9adb6345718a86cc2dd08c.jpg">
                                                <p id="full" class="mt-2">100</p>
                                                <div class="buttons pb-3">
                                                  <button class="btn btn-primary" id="healthyButton">Healthy Food</button>
                                                  <button class="btn btn-primary" id="badButton">Bad Food</button>
                                                </div>
                                              </div>`;
  document.querySelector('#play').innerHTML = `<div class="play pt-2">
                                              <div class="mb-2">Let's PLAY</div>
                                              <img class="playImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAV7V11hQkDdvdjOt2GAVYx64Hr-ISLO5fYQ&usqp=CAU" alt="play">
                                              <p id="fun" class="mt-2">50</p>
                                              <div class="buttons pb-3">
                                                <button class="btn btn-warning" id="funButton">Super Fun</button>
                                                <button class="btn btn-warning" id="littleFunButton">Slightly Fun</button>
                                              </div>
                                              </div>`;
  document.querySelector('#fight').innerHTML = `<div class="fight pt-2">
                                              <div class="mb-2">Let's FIGHT</div>
                                              <img class="fightImg" src="http://d13n9ry8xcpemi.cloudfront.net/photo/odai/400/db6ee76ec19d443ff3b38dae1356ad37_400.jpg" alt="fight">
                                              <p id="strength" class="mt-2">100</p>
                                              <div class="buttons pb-3">
                                                <button class="btn btn-danger" id="runButton">Run Away</button>
                                                <button class="btn btn-danger" id="violenceButton">VIOLENCE</button>
                                              </div>
                                              </div>`;
  document.querySelector('#sleep').innerHTML = `<div class="sleep pt-2">
                                              <div class="mb-2">Let's SLEEP</div>
                                               <img class="sleepImg" src="https://i.gzn.jp/img/2015/07/12/tamagotch-apple-watch/s86.png" alt="sleep">
                                              <p id="energy" class="mt-2">50</p>
                                              <div class="buttons pb-3">
                                                <button class="btn btn-success" id="napButton">Nap</button>
                                                <button class="btn btn-success" id="slumberButton">Deep Sleep</button>
                                              </div>
                                              </div>`;
  document.querySelector('#pet').innerHTML = `<form class="form-inline">
                                              <div class="form-group m-2">
                                                <h4>Please enter your image</h4>
                                              </div>
                                              <div class="form-group m-2">
                                                <label for="imgUrl" class="sr-only">Image URL</label>
                                                <input type="imgUrl" class="form-control" id="imgUrl" placeholder="Image URL" required>
                                              </div>
                                              <button type="submit" id="submit" class="btn btn-primary m-2">Submit Image</button>
                                              </form>
                                              <div class="container" id="secretImg">Your Picture</div>`;
};

export default pageBuilder;
