
describe('index file', () => {
  beforeEach(async () => {
    var fixture = `<div id="fixture">
                      <div class="header"> </div>
                        <div>
                          <div id="image-gallery-div"></div>
                            <div id="pager"> </div>
                          </div>
                          <div id="modal" class="modal">
                            <div id="modal-content"> </div>
                          </div>
                    </div>
      `;

    document.body.insertAdjacentHTML('afterbegin', fixture);
    window.setImage(1);
  });

  afterEach(() => {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it('should be true', () => {
    fixture.detectChanges();
    expect(document.getElementById('image-gallery-div').innerHTML).toBeTruthy();
  });
});