// Watchers and Workers Saga

// saga file is split into two different classes of saga : workers and watchers

// Watcher saga sees every action that is dispatched to redux store , if it matches
// the action they are hold to handle , they assign it to their worker saga