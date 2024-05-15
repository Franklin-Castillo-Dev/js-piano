const piano = document.getElementById('piano');
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const octaves = [1, 2, 3, 4, 5];

        octaves.forEach(octave => {
            notes.forEach(note => {
                const key = document.createElement('div');
                key.classList.add('key');
                if (note.includes('#')) {
                    key.classList.add('black');
                } else {
                    key.classList.add('white');
                }
                key.setAttribute('data-note', `${note}${octave}`);
                key.innerText = note;
                piano.appendChild(key);
            });
        });

        document.querySelectorAll('.key').forEach(key => {
            key.addEventListener('click', () => {
                const note = key.getAttribute('data-note');
                const synth = new Tone.Synth().toDestination();
                synth.triggerAttackRelease(note, '8n');
            });
        });