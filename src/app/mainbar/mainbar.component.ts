//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Octokit } from '@octokit/rest';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent implements OnInit {
  //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
  constructor(
    
  ) {}
  
  ngOnInit(): void {
    this.getUfsdl();
    this.getUfsdlCommits();
  }

  async getUfsdl(): Promise<void> {
    const client = new Octokit({
      auth: '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'
    });

    await client.request('GET /repos/rgsamways/ufsdl', {
      owner: 'rgsamways',
      repo: 'ufsdl',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then(data => {
      // issues is an array of all issue objects
      console.dir(data);
    })
  }

  async getUfsdlCommits(): Promise<void> {
    const client = new Octokit({
      auth: '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'
    });

    await client.request('GET /repos/rgsamways/ufsdl/commits', {
      owner: 'rgsamways',
      repo: 'ufsdl',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then(data => {
      // issues is an array of all issue objects
      console.dir(data);
    })
  }
}
