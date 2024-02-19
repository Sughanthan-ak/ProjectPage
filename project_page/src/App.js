import logo from './logo.svg';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TimerIcon from '@mui/icons-material/Timer';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import FilePresentRoundedIcon from '@mui/icons-material/FilePresentRounded';
import PlaylistAddCircleSharpIcon from '@mui/icons-material/PlaylistAddCircleSharp';

function App() {

  const column1Papers = [1, 1, 1];
  const column2Papers = [1, 1];
  const column3Papers = [1, 1, 1];

  return (
    <div className="total" style={{ backgroundColor: 'rgb(248,250,252)', width: '100vw', height: '100vh' }}>
      <div className="topleft" style={{ width: '300px', height: '100vh', background: 'linear-gradient(179.66deg, #01DCBA -0.77%, #7D32CB 98.56%, #7F30CB 98.57%)', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', position: 'fixed' }}></div>
      <div className="topright" style={{ backgroundColor: 'rgb(255, 255, 255)', width: '100vw', height: '50px' }}></div>
      <div className="Main" style={{ width: '1250px', height: '630px', position: 'fixed', top: '50px', right: '0px' }}>
        <div className="Title" style={{ width: '1250px', height: '50px', display: 'flex', position: 'fixed', left: '280px', justifyContent: 'space-around', alignItems: 'center' }}>
          <div className="ToDoTitle A" style={{ width: '300px', fontWeight: '700', fontSize: 'medium', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: '80px' }}>
            <div className="ToDo03 B" style={{ width: '150px', display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px' }}>
              <div>To Do <span>(03)</span></div>
              <div className="Blk C" style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
            </div>
            <div className="Plus1 D" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgb(149,164,185)', gap: '20px' }}><AddIcon /> <MoreHorizIcon /></div>
          </div>
          <div className="ProgressTitle A" style={{ width: '300px', fontWeight: '700', fontSize: 'medium', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: '80px' }}>
            <div className="Progress02 B" style={{ width: '150px', display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px' }}>
              <div>In Progress <span>(02)</span></div>
              <div className="Ble C" style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
            </div>
            <div className="Plus2 D" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgb(149,164,185)', gap: '20px' }}><AddIcon /> <MoreHorizIcon /></div>
          </div>
          <div className="ReviewTitle A" style={{ width: '300px', fontWeight: '700', fontSize: 'medium', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: '80px' }}>
            <div className="Review10 B" style={{ width: '150px', display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px' }}>
              <div>In Review <span>(10)</span></div>
              <div className="Yel C" style={{ backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
            </div>
            <div className="Plus3 D" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgb(149,164,185)', gap: '20px' }}><AddIcon /> <MoreHorizIcon /></div>
          </div>
        </div>
        <div className="ColumnContainer" style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-around' }}>
          <div className="Column1" style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
            {column1Papers.map((_, index) => (
              <Paper key={`column1-paper-${index}`} elevation={5} style={{ marginBottom: '20px', width: '300px', height: '180px' }}>
                <div className={`card card${index + 1}`} style={{ padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <LabelImportantOutlinedIcon style={{ color: 'rgb(235,87,87)' }} />
                    <p style={{ marginLeft: '5px' }}>Material Cost</p>
                    <div style={{ marginLeft: 'auto', color: 'rgb(47,128,237)', borderRadius: '40%', padding: '5px', backgroundColor: 'rgb(235,243,254)', display: 'flex', alignItems: 'center' }}>
                      Ongoing
                      <ArrowDropDownIcon style={{ color: 'rgb(47,128,237)' }} />
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', textAlign: 'center' }}>This view is called the 'Task Detail View' where complete information about this task is shown</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimerIcon style={{ color: 'rgb(255,167,38)' }} />
                    <p style={{ marginLeft: '5px', fontSize: '12px' }}>Deadline: 11th - 15th February 2024</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AvatarGroup max={4}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{ width: '20px', height: '20px' }} />
                    </AvatarGroup>
                    <AddCircleOutlineRoundedIcon style={{ color: 'rgb(189,189,189)', fontSize: '20px' }} />
                    <FilePresentRoundedIcon style={{ color: 'rgb(189,189,189)', fontSize: '20px' }} />
                    <PlaylistAddCircleSharpIcon style={{ color: 'rgb(189,189,189)', fontSize: '20px' }} />
                  </div>
                </div>
              </Paper>
            ))}
          </div>
          <div className="Column2" style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
            {column2Papers.map((_, index) => (
              <Paper key={`column2-paper-${index}`} elevation={5} style={{ marginBottom: '20px', width: '300px', height: '180px' }}>
                <div className={`card card${index + 4}`} style={{ padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <LabelImportantOutlinedIcon style={{ color: 'rgb(235,87,87)' }} />
                    <p style={{ marginLeft: '5px' }}>Material Cost</p>
                    <div style={{ marginLeft: 'auto', color: 'rgb(47,128,237)', borderRadius: '40%', padding: '5px', backgroundColor: 'rgb(235,243,254)', display: 'flex', alignItems: 'center' }}>
                      Ongoing
                      <ArrowDropDownIcon style={{ color: 'rgb(47,128,237)' }} />
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', textAlign: 'center' }}>This view is called the 'Task Detail View' where complete information about this task is shown</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimerIcon style={{ color: 'rgb(255,167,38)' }} />
                    <p style={{ marginLeft: '5px', fontSize: '12px' }}>Deadline: 11th - 15th February 2024</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AvatarGroup max={4}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{ width: '20px', height: '20px' }} />
                    </AvatarGroup>
                    <AddCircleOutlineRoundedIcon style={{ color: 'rgb(189,189,189)', fontSize: '20px' }} />
                    <FilePresentRoundedIcon style={{ color: 'rgb(189,189,189)', fontSize: '20px' }} />
                    <PlaylistAddCircleSharpIcon style={{ color: 'rgb(189,189,189)', fontSize: '20px' }} />
                  </div>
                </div>
              </Paper>
            ))}
          </div>
          <div className="Column3" style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
            {column3Papers.map((_, index) => (
              <Paper key={`column3-paper-${index}`} elevation={5} style={{ marginBottom: '20px', width: '300px', height: '180px' }}>
                <div className={`card card${index + 6}`} style={{ padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <LabelImportantOutlinedIcon style={{ color: 'rgb(235,87,87)' }} />
                    <p style={{ marginLeft: '5px' }}>Material Cost</p>
                    <div style={{ marginLeft: 'auto', color: 'rgb(47,128,237)', borderRadius: '40%', padding: '5px', backgroundColor: 'rgb(235,243,254)', display: 'flex', alignItems: 'center' }}>
                      Ongoing
                      <ArrowDropDownIcon style={{ color: 'rgb(47,128,237)' }} />
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', textAlign: 'center' }}>This view is called the 'Task Detail View' where complete information about this task is shown</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimerIcon style={{ color: 'rgb(255,167,38)' }} />
                    <p style={{ marginLeft: '5px', fontSize: '12px' }}>Deadline: 11th - 15th February 2024</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AvatarGroup max={4}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" style={{ width: '20px', height: '20px' }} />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" style={{ width: '20px', height: '20px' }} />
                    </AvatarGroup>
                    <AddCircleOutlineRoundedIcon style={{ color: 'rgb(189,189,189)', fontSize: '20px' }} />
                    <FilePresentRoundedIcon style={{ color: 'rgb(189,189,189)', fontSize: '20px' }} />
                    <PlaylistAddCircleSharpIcon style={{ color: 'rgb(189,189,189)', fontSize: '20px' }} />
                  </div>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
