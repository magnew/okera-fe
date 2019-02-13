import React from 'react';

export default {
  id: 'root',
  renderer: () => (
    <div>
      <p>
        Root element
      </p>
    </div>
  ), 
  children: [
    {
      id: 'badger1',
      renderer: () => (
        <div>
          <p>
            Badger
          </p>
        </div>
      ),
      children: [
        {
          id: 'mushroom1',
          renderer: () => (
            <div>
              <p>
                Mushroom
              </p>
            </div>
          ),
          children: [
            {
              id: 'snake1',
              renderer: () => (
                <div>
                  <p>
                    A snake!
                  </p>
                </div>
              ),
            },
            {
              id: 'snake2',
              renderer: () => (
                <div>
                  <p>
                    A snake!
                  </p>
                </div>
              ),
            }
          ]
        }
      ]
    },
    {
      id: 'badger2',
      renderer: () => (
        <div>
          <p>
            badger
          </p>
        </div>
      ),
    },
    {
      id: 'badger3',
      renderer: () => (
        <div>
          <p>
            badger
          </p>
        </div>
      ),
    },
    {
      id: 'badger4',
      renderer: () => (
        <div>
          <p>
            badger
          </p>
        </div>
      ),
      children: [
        {
          id: 'mushroom2',
          renderer: () => (
            <div>
              <p>
                mushroom!
              </p>
            </div>
          ),
          children: [
            {
              id: 'snake3',
              renderer: () => (
                <div>
                  <p>
                    Oooooooo, its a snake
                  </p>
                </div>
              ),
            }
          ]
        }
      ]
    }
  ]
}