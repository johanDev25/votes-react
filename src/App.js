import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import posts from './posts'
import AppPost from './components/AppPost';
import AppButtons from './components/AppButtons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _posts: [],
      type: 'desc'
    }
  }

  componentDidMount() {
    const newpost = posts.sort((a, b) => a.votes - b.votes).reverse()

    this.setState({ _posts : newpost})
  }

  sortByVotesAsc = () => {
    const { _posts } = this.state;
    _posts.sort((a, b) => a.votes - b.votes)
    this.setState({ _posts , type: 'asc' })
  }

  sortByVotesDesc = () => {
    const { _posts } = this.state;
    _posts.sort((a, b) => a.votes - b.votes).reverse()
    this.setState({ _posts, type: 'desc' })
  }

  vote(id, i){
    const { _posts } = this.state;
    const vote = i === 1 ? 1 : -1
    let newArr = this.state._posts.map(post => post.id === id ?  {...post, votes: post.votes+=vote} : post )
    this.state.type === 'desc' ? newArr = _posts.sort((a, b) => a.votes - b.votes).reverse() : newArr = _posts.sort((a, b) => a.votes - b.votes)
    this.setState({
      _posts: newArr
    })
  }

  render() {
    const { _posts } = this.state;
    return (
      <div className="App">
        <Container>
          <h1>Blog post Populares</h1>
          <hr/>
          <AppButtons
            asc={this.sortByVotesAsc}
            desc={this.sortByVotesDesc}
            />

          {
            _posts.map(post => {
              return(
                <AppPost
                  key={post.id}
                  id={post.id}
                  post_image_url={post.post_image_url}
                  votes={post.votes}
                  url={post.url}
                  title={post.title}
                  description={post.description}
                  writer_avatar_url={post.writer_avatar_url}
                  upVote={() => this.vote.bind(this,post.id, 1)}
                  downVote={() => this.vote.bind(this,post.id, -1)}
                  />
              )
            })
          }
          <hr/>
        </Container>
      </div>
    );
  }
}


export default App;
