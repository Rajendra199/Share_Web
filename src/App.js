import './App.css';
import ShareIcon from '@mui/icons-material/Share';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogContent from '@material-ui/core/DialogContent';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share';
import Home from './Home';

function App() {
  const [shareOpen, setShareOpen] = useState(false);

  const handleClickToShare = () => {
    setShareOpen(true);
  };
  const handleToCloseShare = () => {
    setShareOpen(false);
  };
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <div>
          <img
            className="collection-images"
            src="/share.png"
            onClick={() => handleClickToShare()}
          />
          <Dialog open={shareOpen} onClose={handleToCloseShare}>
            <DialogContent style={{ backgroundColor: 'black' }}>
              <div>
                <div
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <CloseIcon
                    style={{
                      cursor: 'pointer',
                      color: 'white',
                      float: 'right',
                      fontSize: '30px',
                      marginBottom: '-5px',
                    }}
                    onClick={handleToCloseShare}
                  />
                  <h5 style={{ color: 'white' }}>Share</h5>
                </div>
                <div style={{ marginTop: '8%' }}>
                  <input value={window.location.href} />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                  >
                    Copy Link
                  </button>
                </div>
                <h6 style={{ color: 'white' }}>Or share via</h6>
                <div style={{ justifyContent: 'space-between' }}>
                  <FacebookShareButton round={false} url={window.location.href}>
                    <FacebookIcon size={36} round />
                  </FacebookShareButton>

                  <TwitterShareButton round={false} url={window.location.href}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <WhatsappShareButton round={false} url={window.location.href}>
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <EmailShareButton round={false} url={window.location.href}>
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                  <LinkedinShareButton url={window.location.href}>
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>
    </div>
  );
}

export default App;
