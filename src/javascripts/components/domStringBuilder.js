const domStringBuilder = () => {
  document.querySelector('#pet').innerHTML = `<form class="form-inline">
                                                <div class="form-group m-2">
                                                  <h4>Please enter your image</h4>
                                                </div>
                                                <div class="form-group m-2">
                                                  <label for="inputPassword2" class="sr-only">Image URL</label>
                                                  <input type="password" class="form-control" id="inputPassword2" placeholder="Image URL">
                                                </div>
                                                <button type="submit" class="btn btn-primary m-2">Submit Image</button>
                                              </form>`;
};

export default domStringBuilder;
